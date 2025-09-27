export interface OfflineDetectorOptions {
  /** Callback function called when the device comes online */
  onOnline?: () => void;
  /** Callback function called when the device goes offline */
  onOffline?: () => void;
  /** Debounce delay for state changes in milliseconds. Defaults to 1000ms */
  stateChangeDebounceDelay?: number;
  /** Network verification and polling configuration */
  networkVerification?: {
    /** Whether to perform actual network requests for verification. Defaults to true */
    enabled?: boolean;
    /** URL to test connectivity against. Defaults to a reliable endpoint */
    url?: string;
    /** Request timeout for connectivity tests in milliseconds. Defaults to 5000ms */
    requestTimeout?: number;
    /** Interval between connectivity checks in milliseconds. Defaults to 60000ms */
    interval?: number;
    /** Maximum consecutive failures before considering offline. Defaults to 3 */
    maxFailures?: number;
  };
  /** Native events configuration */
  nativeEvents?: {
    /** Whether to enable browser's native online/offline events as primary detection. Defaults to true */
    enabled?: boolean;
  };
}

export interface OfflineDetector {
  /** Start monitoring network status */
  start(): void;
  /** Stop monitoring network status */
  stop(): void;
  /** Get current online status - returns true if online, false if offline */
  isOnline(): boolean;
  /** Destroy the detector and clean up resources */
  destroy(): void;
}
