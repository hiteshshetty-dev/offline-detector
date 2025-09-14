import { OfflineDetector, OfflineDetectorOptions } from './types';

export function createOfflineDetector(
  options: OfflineDetectorOptions = {}
): OfflineDetector {
  const { onOnline, onOffline } = options;

  let isListening = false;

  const isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';

  if (!isBrowser) {
    throw new Error('OfflineDetector can only be used in browser environments');
  }

  const handleOnline = (): void => {
    onOnline?.();
  };

  const handleOffline = (): void => {
    onOffline?.();
  };

  return {
    start(): void {
      if (isListening) return;

      isListening = true;

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    },

    stop(): void {
      if (!isListening) return;

      isListening = false;

      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    },

    isOnline(): boolean {
      return navigator.onLine;
    },

    destroy(): void {
      this.stop();
    },
  };
}

export type { OfflineDetector, OfflineDetectorOptions } from './types';