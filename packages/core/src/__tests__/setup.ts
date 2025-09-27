import { beforeEach, jest } from '@jest/globals';

window.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;

Object.defineProperty(window, 'navigator', {
  value: {
    onLine: true,
  },
  writable: true,
});

const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
  writable: true,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
  writable: true,
});

beforeEach(() => {
  jest.clearAllMocks();
  (window.fetch as jest.Mock).mockClear();
  mockAddEventListener.mockClear();
  mockRemoveEventListener.mockClear();

  // Reset navigator.onLine to default
  Object.defineProperty(window.navigator, 'onLine', {
    value: true,
    writable: true,
  });
});

export const setNavigatorOnline = (isOnline: boolean): void => {
  Object.defineProperty(window.navigator, 'onLine', {
    value: isOnline,
    writable: true,
  });
};

export const mockFetchResponse = (
  success: boolean,
  delay = 0
): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          ok: true,
          status: 200,
        });
      } else {
        reject(new Error('Network error'));
      }
    }, delay);
  });
};

export const mockFetchTimeout = (timeout: number): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, timeout);
  });
};
