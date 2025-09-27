import {
  describe,
  beforeEach,
  afterEach,
  it,
  expect,
  jest,
} from '@jest/globals';
import { createNativeEventHandlers } from '../../utils/native-events';

const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;

describe('createNativeEventHandlers', () => {
  beforeEach(() => {
    // Replace with mocks
    window.addEventListener = mockAddEventListener;
    window.removeEventListener = mockRemoveEventListener;
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Restore original methods
    window.addEventListener = originalAddEventListener;
    window.removeEventListener = originalRemoveEventListener;
  });

  describe('addListeners method', () => {
    it('should add online and offline event listeners', () => {
      // Arrange
      const onOnline = jest.fn();
      const onOffline = jest.fn();
      const handlers = createNativeEventHandlers({ onOnline, onOffline });

      // Act
      handlers.addListeners();

      // Assert
      expect(mockAddEventListener).toHaveBeenCalledTimes(2);
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'online',
        expect.any(Function)
      );
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'offline',
        expect.any(Function)
      );
    });

    it('should call onOnline when online event is triggered', () => {
      // Arrange
      const onOnline = jest.fn();
      const onOffline = jest.fn();
      const handlers = createNativeEventHandlers({ onOnline, onOffline });
      handlers.addListeners();

      // Get the event handler function
      const onlineHandler = mockAddEventListener.mock.calls.find(
        call => call[0] === 'online'
      )?.[1];

      // Act
      if (typeof onlineHandler === 'function') {
        onlineHandler();
      }

      // Assert
      expect(onOnline).toHaveBeenCalledTimes(1);
      expect(onOffline).not.toHaveBeenCalled();
    });

    it('should call onOffline when offline event is triggered', () => {
      // Arrange
      const onOnline = jest.fn();
      const onOffline = jest.fn();
      const handlers = createNativeEventHandlers({ onOnline, onOffline });
      handlers.addListeners();

      // Get the event handler function
      const offlineHandler = mockAddEventListener.mock.calls.find(
        call => call[0] === 'offline'
      )?.[1];

      // Act
      if (typeof offlineHandler === 'function') {
        offlineHandler();
      }

      // Assert
      expect(onOffline).toHaveBeenCalledTimes(1);
      expect(onOnline).not.toHaveBeenCalled();
    });
  });

  describe('removeListeners method', () => {
    it('should remove online and offline event listeners', () => {
      // Arrange
      const onOnline = jest.fn();
      const onOffline = jest.fn();
      const handlers = createNativeEventHandlers({ onOnline, onOffline });
      handlers.addListeners();

      // Act
      handlers.removeListeners();

      // Assert
      expect(mockRemoveEventListener).toHaveBeenCalledTimes(2);
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'online',
        expect.any(Function)
      );
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'offline',
        expect.any(Function)
      );
    });

    it('should remove the same function references that were added', () => {
      // Arrange
      const onOnline = jest.fn();
      const onOffline = jest.fn();
      const handlers = createNativeEventHandlers({ onOnline, onOffline });
      handlers.addListeners();

      // Get the functions that were added
      const addedOnlineHandler = mockAddEventListener.mock.calls.find(
        call => call[0] === 'online'
      )?.[1];
      const addedOfflineHandler = mockAddEventListener.mock.calls.find(
        call => call[0] === 'offline'
      )?.[1];

      // Act
      handlers.removeListeners();

      // Assert
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'online',
        addedOnlineHandler
      );
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'offline',
        addedOfflineHandler
      );
    });
  });

  describe('integration scenarios', () => {
    it('should maintain separate instances independently', () => {
      // Arrange
      const onOnline1 = jest.fn();
      const onOffline1 = jest.fn();
      const onOnline2 = jest.fn();
      const onOffline2 = jest.fn();
      const handlers1 = createNativeEventHandlers({
        onOnline: onOnline1,
        onOffline: onOffline1,
      });
      const handlers2 = createNativeEventHandlers({
        onOnline: onOnline2,
        onOffline: onOffline2,
      });

      // Act
      handlers1.addListeners();
      handlers2.addListeners();

      // Get handlers for first instance
      const onlineHandler1 = mockAddEventListener.mock.calls.find(
        call => call[0] === 'online'
      )?.[1];

      // Trigger first instance
      if (typeof onlineHandler1 === 'function') {
        onlineHandler1();
      }

      // Assert
      expect(onOnline1).toHaveBeenCalledTimes(1);
      expect(onOnline2).not.toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('should handle null/undefined handlers gracefully', () => {
      // Arrange
      const onOnline = null as any;
      const onOffline = undefined as any;

      // Act & Assert - Should not throw during creation
      expect(() => {
        const handlers = createNativeEventHandlers({ onOnline, onOffline });
        handlers.addListeners();
      }).not.toThrow();
    });
  });
});
