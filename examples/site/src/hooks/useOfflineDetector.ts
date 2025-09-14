'use client';

import { useEffect, useState, useRef } from 'react';
import { createOfflineDetector, type OfflineDetector } from 'offline-detector';

export interface UseOfflineDetectorOptions {
  onOnline?: () => void;
  onOffline?: () => void;
}

export interface UseOfflineDetectorReturn {
  isOnline: boolean;
}

export function useOfflineDetector(
  options: UseOfflineDetectorOptions = {}
): UseOfflineDetectorReturn {
  const { onOnline, onOffline } = options;

  const [isOnline, setIsOnline] = useState<boolean>(true);
  const detector = useRef<OfflineDetector | null>(null);

  // Initialize detector
  useEffect(() => {
    try {
      const newDetector = createOfflineDetector({
        onOnline: () => {
          setIsOnline(true);
          onOnline?.();
        },
        onOffline: () => {
          setIsOnline(false);
          onOffline?.();
        },
      });
      detector.current = newDetector;

      // Set initial status
      setIsOnline(newDetector.isOnline());
      newDetector.start();

      return () => {
        newDetector.destroy();
      };
    } catch (error) {
      console.error('Failed to create offline detector:', error);
    }
  }, []);

  return {
    isOnline,
  };
}
