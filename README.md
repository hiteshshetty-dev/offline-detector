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

*Coming soon - API documentation will be available once the library is implemented.*

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

### Phase 1: Core Library (Current)

- [x] Repository setup and boilerplate
- [x] TypeScript configuration
- [x] Modern bundler support (Rollup)
- [x] ESLint and Prettier setup
- [ ] Basic online/offline detection implementation
- [ ] API documentation
- [ ] Example website/demo configuration
- [ ] Testing framework setup (Jest/Vitest)
- [ ] Unit tests and CI/CD

### Phase 2: Enhanced Features

- [ ] Network quality detection
- [ ] Connection type detection
- [ ] Custom polling strategies
- [ ] Browser support documentation

### Phase 3: Monorepo Migration

- [ ] Convert to monorepo structure (Lerna/Nx/Rush)
- [ ] Split into multiple packages:
  - `@offline-detector/core` - Core detection logic
  - `@offline-detector/react` - React hooks and components
  - `@offline-detector/vue` - Vue composables and components
  - `@offline-detector/svelte` - Svelte stores and components
  - `@offline-detector/angular` - Angular services and directives
- [ ] Shared tooling and configuration
- [ ] Independent versioning and publishing
- [ ] Cross-package testing and validation
