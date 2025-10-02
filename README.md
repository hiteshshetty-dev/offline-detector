# Offline Detector

[![npm version](https://img.shields.io/npm/v/offline-detector.svg?style=flat-square)](https://www.npmjs.com/package/offline-detector)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/hiteshshetty-dev/offline-detector/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/offline-detector?style=flat-square)](https://bundlephobia.com/package/offline-detector)
[![Tests](https://img.shields.io/github/actions/workflow/status/hiteshshetty-dev/offline-detector/ci.yml?branch=main&label=tests&style=flat-square)](https://github.com/hiteshshetty-dev/offline-detector/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/hiteshshetty-dev/offline-detector/blob/main/CONTRIBUTING.md)

A lightweight TypeScript library for detecting online/offline status in browsers with modern bundler support.

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

## Packages

This is a monorepo containing multiple packages:

- **[`offline-detector`](./packages/core/README.md)** - Core detection library with comprehensive API documentation
- `offline-detector/react` - React hooks and components _(coming soon)_
- `offline-detector/vue` - Vue composables and components _(coming soon)_

## API Overview

The core API is simple and intuitive:

```typescript
const detector = createOfflineDetector({
  onOnline: () => console.log('Back online!'),
  onOffline: () => console.log('Gone offline!'),
});

detector.start(); // Start monitoring
detector.isOnline(); // Check current status
detector.stop(); // Stop monitoring
detector.destroy(); // Clean up resources
```

📖 **[View complete API documentation →](./packages/core/README.md#api-reference)**

## Advanced Usage

### Custom Configuration

```typescript
const detector = createOfflineDetector({
  onOnline: () => syncPendingData(),
  onOffline: () => showOfflineBanner(),
  stateChangeDebounceDelay: 2000,
  networkVerification: {
    enabled: true,
    url: 'https://api.example.com/health',
    interval: 30000,
    maxFailures: 2,
  },
});
```

### React Integration

```typescript
function useOfflineDetector() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const detector = createOfflineDetector({
      onOnline: () => setIsOnline(true),
      onOffline: () => setIsOnline(false),
    });

    detector.start();
    return () => detector.destroy();
  }, []);

  return isOnline;
}
```

📚 **[View more examples and detailed configuration →](./packages/core/README.md#usage-examples)**

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

## Roadmap

### Phase 1: Core Library

- [x] Repository setup and boilerplate
- [x] TypeScript configuration
- [x] Modern bundler support (Rollup)
- [x] ESLint and Prettier setup
- [x] Basic online/offline detection implementation
- [x] API documentation
- [x] Example website/demo configuration
- [x] Testing framework setup (Jest/Vitest)
- [x] Unit tests and CI/CD

### Phase 2: Enhanced Features

- [x] Network quality detection
- [x] Custom polling strategies
- [x] Connection verification with configurable test URLs
- [x] Debounced state changes
- [x] Failure threshold handling
- [ ] Connection type detection

### Phase 3: Monorepo Migration

- [x] Convert to monorepo structure (Lerna)
- [] Split into multiple packages:
  - `offline-detector` - Core detection logic
  - `offline-detector/react` - React hooks and components
  - `offline-detector/vue` - Vue composables and components
  - `offline-detector/svelte` - Svelte stores and components
  - `offline-detector/angular` - Angular services and directives
- [x] Shared tooling and configuration
- [x] Independent versioning and publishing (Changesets)
- [ ] Cross-package testing and validation
- [ ] Comprehensive testing suite
- [ ] Performance benchmarks
- [ ] Browser compatibility testing
