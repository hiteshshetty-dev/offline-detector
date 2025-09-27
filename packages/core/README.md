# Offline Detector

A lightweight TypeScript library for detecting online/offline status in browsers with modern bundler support. Features intelligent network verification, debounced state changes, and flexible configuration options.

## Features

- 🌐 **Browser-focused**: Designed specifically for browser environments
- 📦 **Bundler agnostic**: Works with any modern bundler (Webpack, Vite, Rollup, etc.)
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🚀 **Lightweight**: Minimal bundle size with tree-shaking support
- 📱 **Cross-platform**: Works across all modern browsers
- 🔍 **Smart Detection**: Combines native events with network verification
- ⚡ **Debounced**: Prevents rapid state changes with configurable debouncing
- 🎯 **Configurable**: Extensive options for customization

## Installation

```bash
npm install offline-detector
```

## Quick Start

```typescript
import { createOfflineDetector } from 'offline-detector';

const detector = createOfflineDetector({
  onOnline: () => console.log('Back online!'),
  onOffline: () => console.log('Gone offline!'),
});

// Start monitoring
detector.start();

// Check current status
console.log(detector.isOnline()); // true or false

// Stop monitoring
detector.stop();
```

## API Reference

### `createOfflineDetector(options?)`

Creates a new offline detector instance.

#### Parameters

- `options` (optional): `OfflineDetectorOptions` - Configuration object

#### Returns

`OfflineDetector` - An object with methods to control the detector

### `OfflineDetectorOptions`

```typescript
interface OfflineDetectorOptions {
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
```

### `OfflineDetector`

```typescript
interface OfflineDetector {
  /** Start monitoring network status */
  start(): void;
  /** Stop monitoring network status */
  stop(): void;
  /** Get current online status - returns true if online, false if offline */
  isOnline(): boolean;
  /** Destroy the detector and clean up resources */
  destroy(): void;
}
```

## Usage Examples

### Basic Usage

```typescript
import { createOfflineDetector } from 'offline-detector';

const detector = createOfflineDetector({
  onOnline: () => {
    console.log('Connection restored!');
    // Show success notification
  },
  onOffline: () => {
    console.log('Connection lost!');
    // Show offline indicator
  },
});

detector.start();
```

### Advanced Configuration

```typescript
import { createOfflineDetector } from 'offline-detector';

const detector = createOfflineDetector({
  onOnline: () => {
    // Sync data when back online
    syncPendingData();
  },
  onOffline: () => {
    // Show offline banner
    showOfflineBanner();
  },
  stateChangeDebounceDelay: 2000, // Wait 2 seconds before triggering callbacks
  networkVerification: {
    enabled: true,
    url: 'https://api.example.com/health', // Your own endpoint
    requestTimeout: 10000, // 10 second timeout
    interval: 30000, // Check every 30 seconds
    maxFailures: 2, // Go offline after 2 consecutive failures
  },
  nativeEvents: {
    enabled: true, // Use browser's native events as primary detection
  },
});

detector.start();
```

### React Hook Example

```typescript
import { useEffect, useState } from 'react';
import { createOfflineDetector } from 'offline-detector';

function useOfflineDetector() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const detector = createOfflineDetector({
      onOnline: () => setIsOnline(true),
      onOffline: () => setIsOnline(false),
      networkVerification: {
        enabled: true,
        interval: 5000, // Check every 5 seconds
        maxFailures: 2
      }
    });

    detector.start();
    setIsOnline(detector.isOnline());

    return () => detector.destroy();
  }, []);

  return isOnline;
}

// Usage in component
function App() {
  const isOnline = useOfflineDetector();

  return (
    <div>
      <h1>My App</h1>
      {!isOnline && (
        <div className="offline-banner">
          You're currently offline
        </div>
      )}
    </div>
  );
}
```

### Vanilla JavaScript Example

```javascript
import { createOfflineDetector } from 'offline-detector';

// Create detector with custom configuration
const detector = createOfflineDetector({
  onOnline: () => {
    document.body.classList.remove('offline');
    document.getElementById('status').textContent = 'Online';
  },
  onOffline: () => {
    document.body.classList.add('offline');
    document.getElementById('status').textContent = 'Offline';
  },
  stateChangeDebounceDelay: 1500,
  networkVerification: {
    enabled: true,
    url: '/api/health',
    requestTimeout: 3000,
    interval: 10000,
    maxFailures: 3,
  },
});

// Start monitoring
detector.start();

// Check status programmatically
function checkStatus() {
  const status = detector.isOnline() ? 'Online' : 'Offline';
  console.log(`Current status: ${status}`);
}

// Clean up when done
window.addEventListener('beforeunload', () => {
  detector.destroy();
});
```

### Module Bundlers

#### ES Modules

```javascript
import { createOfflineDetector } from 'offline-detector';
```

#### CommonJS

```javascript
const { createOfflineDetector } = require('offline-detector');
```

## Configuration Options

### Network Verification

The library can perform actual network requests to verify connectivity:

- **enabled**: Enable/disable network verification (default: `true`)
- **url**: Endpoint to test against (default: `'https://www.google.com/favicon.ico'`)
- **requestTimeout**: Request timeout in milliseconds (default: `5000`)
- **interval**: Check interval in milliseconds (default: `60000`)
- **maxFailures**: Consecutive failures before going offline (default: `3`)

### Native Events

Uses browser's built-in `online`/`offline` events:

- **enabled**: Enable/disable native events (default: `true`)

### Debouncing

Prevents rapid state changes:

- **stateChangeDebounceDelay**: Delay in milliseconds before triggering callbacks (default: `1000`)

## License

[MIT](./LICENSE)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build the library
npm run build

# Run linting
npm run lint

# Format code
npm run format
```
