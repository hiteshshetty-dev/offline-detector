import { OfflineDetector, OfflineDetectorOptions } from './types';
import {
  createDebounce,
  createNativeEventHandlers,
  createPolling,
  testConnectivity,
} from './utils';

export function createOfflineDetector(
  options: OfflineDetectorOptions = {}
): OfflineDetector {
  const {
    onOnline,
    onOffline,
    stateChangeDebounceDelay = 1000,
    networkVerification = {},
    nativeEvents: nativeEventsConfig = {},
  } = options;

  const {
    enabled: useNetworkTest = true,
    url: testUrl = 'https://www.google.com/favicon.ico',
    requestTimeout: timeout = 5000,
    interval: checkInterval = 60000,
    maxFailures: failureThreshold = 3,
  } = networkVerification;

  const { enabled: useNativeEvents = true } = nativeEventsConfig;

  let isListening = false;
  let isOnline = true;
  let consecutiveFailures = 0;

  const isBrowser =
    typeof window !== 'undefined' && typeof navigator !== 'undefined';

  if (!isBrowser) {
    throw new Error('OfflineDetector can only be used in browser environments');
  }

  const debounceAction = createDebounce({
    delay: stateChangeDebounceDelay,
    callback: () => {
      if (isOnline) {
        onOnline?.();
      } else {
        onOffline?.();
      }
    },
  });

  const handleStateChange = (newState: boolean): void => {
    if (isOnline === newState) return;

    const wasOnline = isOnline;
    isOnline = newState;
    if (useNetworkTest && isListening) {
      if (newState && !wasOnline) {
        offlinePolling.stop();
        polling.start();
      } else if (!newState && wasOnline) {
        polling.stop();
        offlinePolling.start();
      }
    }

    debounceAction.call();
  };

  const verifyConnectivity = async (): Promise<boolean> => {
    if (!useNetworkTest) {
      return navigator.onLine;
    }

    try {
      const isConnected = await testConnectivity({
        testUrl,
        timeout,
      });
      return isConnected;
    } catch {
      return false;
    }
  };

  const performConnectivityCheck = async (): Promise<void> => {
    if (!isListening) return;

    const isConnected = await verifyConnectivity();

    if (isConnected) {
      consecutiveFailures = 0;
      if (!isOnline) {
        handleStateChange(true);
      }
    } else {
      if (isOnline) {
        consecutiveFailures++;
        if (consecutiveFailures >= failureThreshold) {
          handleStateChange(false);
        }
      }
    }
  };

  const nativeEvents = createNativeEventHandlers({
    onOnline: () => {
      if (!useNativeEvents) return;

      if (useNetworkTest) {
        verifyConnectivity().then(isActuallyOnline => {
          if (isActuallyOnline) {
            consecutiveFailures = 0;
            handleStateChange(true);
          }
        });
      } else {
        consecutiveFailures = 0;
        handleStateChange(true);
      }
    },

    onOffline: () => {
      if (!useNativeEvents) return;
      handleStateChange(false);
    },
  });

  const polling = createPolling({
    interval: checkInterval,
    callback: performConnectivityCheck,
  });

  const offlinePolling = createPolling({
    interval: Math.min(checkInterval / 4, 15000),
    callback: performConnectivityCheck,
  });

  return {
    start(): void {
      if (isListening) return;

      isListening = true;

      isOnline = navigator.onLine;

      if (useNativeEvents) {
        nativeEvents.addListeners();
      }

      if (useNetworkTest) {
        if (isOnline) {
          polling.start();
        } else {
          offlinePolling.start();
        }
        performConnectivityCheck();
      }
    },

    stop(): void {
      if (!isListening) return;

      isListening = false;

      if (useNativeEvents) {
        nativeEvents.removeListeners();
      }

      polling.stop();
      offlinePolling.stop();
      debounceAction.cancel();
    },

    isOnline(): boolean {
      return isOnline;
    },

    destroy(): void {
      this.stop();
    },
  };
}

export type { OfflineDetector, OfflineDetectorOptions } from './types';
