export interface PollingOptions {
  interval: number;
  callback: () => void | Promise<void>;
}

export function createPolling(options: PollingOptions): {
  start: () => void;
  stop: () => void;
} {
  const { interval, callback } = options;
  let timer: ReturnType<typeof setInterval> | null = null;

  return {
    start(): void {
      if (timer) return;

      timer = setInterval(callback, interval);
    },

    stop(): void {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    },
  };
}
