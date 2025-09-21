# Contributing to Offline Detector

Thank you for your interest in contributing to Offline Detector! This document provides guidelines and information for contributors.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/offline-detector.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Prerequisites

- Node.js 20+
- npm 9+

### Available Scripts

- `npm run build` - Build the library
- `npm run dev` - Start development mode
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Code Style

- Use TypeScript for all source code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for public APIs

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage
- Test in multiple browsers when possible

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Add tests for your changes
3. Update documentation if needed
4. **Add a changeset** if your changes affect the package (see below)
5. Submit a pull request with a clear description
6. Respond to feedback and make necessary changes

### Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing. If your changes affect the public API or functionality:

1. **Add a changeset**: Run `npm run changeset` and follow the prompts
2. **Commit the changeset file** along with your changes
3. **The PR template will remind you** to check the changeset checkbox

**When you don't need a changeset:**

- Documentation updates
- CI/CD changes
- Internal refactoring that doesn't change the public API
- Test improvements

### Automated Workflows

The following workflows run automatically:

- **CI**: Runs on every push and PR to validate code quality
- **Changeset Validation**: Validates changeset configuration in PRs
- **Release**: Publishes packages to NPM when changesets are merged to main
- **Demo Deployment**: Deploys the example site to GitHub Pages

### Release Process

1. **Create a PR** with your changes and changeset
2. **Merge to main** - this triggers the release workflow
3. **Automatic publishing** - packages are published to NPM automatically
4. **Demo site updates** - the example site is deployed to GitHub Pages

## Issue Reporting

When reporting issues, please include:

- Browser version and OS
- Steps to reproduce
- Expected vs actual behavior
- Any error messages or console logs

## Feature Requests

For feature requests, please:

- Check existing issues first
- Provide a clear use case
- Explain the expected behavior
- Consider the library's scope and goals

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow the golden rule

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue for any questions about contributing!
