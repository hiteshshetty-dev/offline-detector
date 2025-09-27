export interface NativeEventHandlers {
  onOnline: () => void;
  onOffline: () => void;
}

export function createNativeEventHandlers(handlers: NativeEventHandlers): {
  addListeners: () => void;
  removeListeners: () => void;
} {
  const { onOnline, onOffline } = handlers;

  const handleOnline = (): void => {
    onOnline();
  };

  const handleOffline = (): void => {
    onOffline();
  };

  return {
    addListeners(): void {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    },

    removeListeners(): void {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    },
  };
}
