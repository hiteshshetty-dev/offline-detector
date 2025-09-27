import {
  describe,
  beforeEach,
  afterEach,
  it,
  expect,
  jest,
} from '@jest/globals';
import { createDebounce } from '../../utils/debounce';

describe('createDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('call method', () => {
    it('should execute callback after specified delay', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      jest.advanceTimersByTime(delay);

      // Assert
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should not execute callback before delay completes', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      jest.advanceTimersByTime(delay - 1);

      // Assert
      expect(callback).not.toHaveBeenCalled();
    });

    it('should reset timer when called multiple times before delay', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      jest.advanceTimersByTime(500);
      debounce.call(); // Reset timer
      jest.advanceTimersByTime(500); // Still not enough time
      jest.advanceTimersByTime(500); // Now should trigger

      // Assert
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple rapid calls correctly', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      debounce.call();
      debounce.call();
      debounce.call();
      jest.advanceTimersByTime(delay);

      // Assert
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('cancel method', () => {
    it('should prevent callback execution when cancelled', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      debounce.cancel();
      jest.advanceTimersByTime(delay);

      // Assert
      expect(callback).not.toHaveBeenCalled();
    });

    it('should handle multiple cancel calls gracefully', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      debounce.cancel();
      debounce.cancel();
      debounce.cancel();
      jest.advanceTimersByTime(delay);

      // Assert
      expect(callback).not.toHaveBeenCalled();
    });

    it('should allow new calls after cancellation', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act
      debounce.call();
      debounce.cancel();
      debounce.call();
      jest.advanceTimersByTime(delay);

      // Assert
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should handle cancel when no timer is active', () => {
      // Arrange
      const callback = jest.fn();
      const delay = 1000;
      const debounce = createDebounce({ delay, callback });

      // Act & Assert - Should not throw
      expect(() => {
        debounce.cancel();
        debounce.cancel();
      }).not.toThrow();
    });
  });

  describe('integration scenarios', () => {
    it('should maintain separate instances independently', () => {
      // Arrange
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      const delay = 1000;
      const debounce1 = createDebounce({ delay, callback: callback1 });
      const debounce2 = createDebounce({ delay, callback: callback2 });

      // Act
      debounce1.call();
      debounce2.call();
      jest.advanceTimersByTime(delay);

      // Assert
      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
    });
  });
});
