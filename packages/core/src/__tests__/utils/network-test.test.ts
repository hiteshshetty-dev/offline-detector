import { describe, beforeEach, it, expect, jest } from '@jest/globals';
import { testConnectivity } from '../../utils/network-test';
import { mockFetchResponse, mockFetchTimeout } from '../setup';

const createMockResponse = (ok: boolean, status: number): any => ({
  ok,
  status,
});
const mockFetch = window.fetch as jest.MockedFunction<typeof fetch>;
describe('testConnectivity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('successful connectivity tests', () => {
    it('should return true when fetch succeeds', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockResolvedValueOnce(createMockResponse(true, 200));

      // Act
      const result = await testConnectivity({ testUrl, timeout });

      // Assert
      expect(result).toBe(true);
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(testUrl, {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
      });
    });

    it('should return true even if response is not ok', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockResolvedValueOnce(createMockResponse(false, 404));

      // Act
      const result = await testConnectivity({ testUrl, timeout });

      // Assert
      expect(result).toBe(true);
    });

    it('should return true for any successful response', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockResolvedValueOnce(createMockResponse(false, 500));

      // Act
      const result = await testConnectivity({ testUrl, timeout });

      // Assert
      expect(result).toBe(true);
    });
  });

  describe('failed connectivity tests', () => {
    it('should return false when fetch throws an error', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      // Act
      const result = await testConnectivity({ testUrl, timeout });

      // Assert
      expect(result).toBe(false);
    });

    it('should return false when fetch times out', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 1000;
      mockFetch.mockImplementationOnce(() => mockFetchTimeout(timeout));

      // Act
      const result = await testConnectivity({ testUrl, timeout });

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle zero timeout', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 0;
      mockFetch.mockImplementationOnce(() => mockFetchResponse(true, 100));

      // Act
      const result = await testConnectivity({ testUrl, timeout });

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('fetch configuration', () => {
    it('should always use HEAD method', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockResolvedValueOnce(createMockResponse(true, 200));

      // Act
      await testConnectivity({ testUrl, timeout });

      // Assert
      const callArgs = mockFetch.mock.calls[0];
      expect(callArgs[1]?.method).toBe('HEAD');
    });

    it('should always use no-cors mode', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockResolvedValueOnce(createMockResponse(true, 200));

      // Act
      await testConnectivity({ testUrl, timeout });

      // Assert
      const callArgs = mockFetch.mock.calls[0];
      expect(callArgs[1]?.mode).toBe('no-cors');
    });

    it('should always use no-cache', async () => {
      // Arrange
      const testUrl = 'https://example.com/test';
      const timeout = 5000;
      mockFetch.mockResolvedValueOnce(createMockResponse(true, 200));

      // Act
      await testConnectivity({ testUrl, timeout });

      // Assert
      const callArgs = mockFetch.mock.calls[0];
      expect(callArgs[1]?.cache).toBe('no-cache');
    });
  });
});
