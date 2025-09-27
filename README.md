# Offline Detector

A lightweight TypeScript library for detecting online/offline status in browsers with modern bundler support.

## Features

- 🌐 **Browser-focused**: Designed specifically for browser environments
- 📦 **Bundler agnostic**: Works with any modern bundler (Webpack, Vite, Rollup, etc.)
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🚀 **Lightweight**: Minimal bundle size
- 📱 **Cross-platform**: Works across all modern browsers

## Installation

```bash
npm install offline-detector
```

## Usage

_Coming soon - API documentation will be available once the library is implemented._

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
