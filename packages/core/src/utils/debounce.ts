export interface DebounceOptions {
  delay: number;
  callback: () => void;
}

export function createDebounce(options: DebounceOptions): {
  call: () => void;
  cancel: () => void;
} {
  const { delay, callback } = options;
  let timer: ReturnType<typeof setTimeout> | null = null;

  return {
    call(): void {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(callback, delay);
    },

    cancel(): void {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    },
  };
}
