export interface OfflineDetectorOptions {
  onOnline?: () => void;
  onOffline?: () => void;
}

export interface OfflineDetector {
  start(): void;
  stop(): void;
  isOnline(): boolean;
  destroy(): void;
}
