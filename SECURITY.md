# Security Policy

## Supported Versions

We actively support the following versions of offline-detector with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously and appreciate your efforts to responsibly disclose any issues you find.

### How to Report

**For security vulnerabilities, please DO NOT create a public GitHub issue.**

Instead, please use one of these methods:

1. **GitHub Security Advisories (Preferred)**
   - Go to the [Security tab](https://github.com/hiteshshetty-dev/offline-detector/security/advisories) in our repository
   - Click "Report a vulnerability"
   - Fill out the private vulnerability report form

2. **Email (Alternative)**
   - Send details to: [hitesh.shetty2011@gmail.com]
   - Use the subject line: "Security Vulnerability in offline-detector"
   - Include all relevant details (see below)

### What to Include

When reporting a security vulnerability, please include:

- **Description**: A clear description of the vulnerability
- **Impact**: What could an attacker accomplish with this vulnerability?
- **Reproduction**: Step-by-step instructions to reproduce the issue
- **Affected versions**: Which versions of offline-detector are affected?
- **Environment**: Browser, OS, and other relevant environment details
- **Proof of concept**: Code or screenshots demonstrating the vulnerability (if applicable)
- **Suggested fix**: If you have ideas for how to fix the issue

### Response Timeline

We are committed to responding to security reports promptly:

- **Initial response**: Within 48 hours of receiving your report
- **Status update**: Within 7 days with our assessment and planned timeline
- **Resolution**: We aim to resolve critical vulnerabilities within 30 days

### Disclosure Process

1. **Report received**: We acknowledge receipt of your vulnerability report
2. **Investigation**: We investigate and validate the reported vulnerability
3. **Fix development**: We develop and test a fix for the vulnerability
4. **Coordinated disclosure**: We work with you on timing for public disclosure
5. **Release**: We release the security fix and publish a security advisory
6. **Public disclosure**: Details are made public after users have had time to update

## Security Best Practices

### For Users

When using offline-detector in your applications:

- **Keep updated**: Always use the latest version to get security fixes
- **Validate inputs**: Sanitize any user inputs that interact with offline-detector
- **Network security**: Use HTTPS for network verification endpoints
- **Content Security Policy**: Implement appropriate CSP headers
- **Dependency scanning**: Regularly scan your dependencies for vulnerabilities

### For Contributors

When contributing to offline-detector:

- **Secure coding**: Follow secure coding practices
- **Input validation**: Validate all inputs and handle edge cases
- **Dependencies**: Keep dependencies updated and scan for vulnerabilities
- **Code review**: All code changes require security-focused review
- **Testing**: Include security-focused tests for new features

## Security Features

### Current Security Measures

- **Input validation**: All configuration options are validated
- **Safe defaults**: Secure default configurations
- **No eval()**: We don't use `eval()` or similar dangerous functions
- **Dependency management**: Regular dependency updates and vulnerability scanning
- **TypeScript**: Strong typing helps prevent common security issues

### Network Security

- **HTTPS enforcement**: Network verification uses secure protocols
- **Timeout handling**: Prevents hanging requests that could cause DoS
- **Error handling**: Secure error messages that don't leak sensitive information
- **CORS awareness**: Respects browser CORS policies

## Vulnerability Disclosure History

We maintain transparency about security issues:

- **No known vulnerabilities**: As of the current version, no security vulnerabilities have been reported
- **Future disclosures**: Any resolved vulnerabilities will be documented here

## Security Contact

- **GitHub Security Advisories**: [Report privately](https://github.com/hiteshshetty-dev/offline-detector/security/advisories/new)
- **Email**: [hitesh.shetty2011@gmail.com]
- **Response time**: 48 hours for initial response

## Scope

This security policy applies to:

- **Core library**: `offline-detector` package
- **Framework integrations**: React, Vue packages (when available)
- **Examples**: Demo applications and code samples
- **Documentation**: Security-related documentation
- **Build tools**: Development and build infrastructure

### Out of Scope

The following are generally considered out of scope:

- **Third-party dependencies**: Issues in dependencies (report to the respective maintainers)
- **User applications**: Security issues in applications using offline-detector
- **Social engineering**: Attacks that don't involve the code itself
- **Physical security**: Issues requiring physical access to systems

## Recognition

We appreciate security researchers who help keep offline-detector secure:

- **Acknowledgment**: We'll acknowledge your contribution in our security advisories (with your permission)
- **Hall of fame**: Security contributors will be listed in our documentation
- **Coordination**: We'll work with you on responsible disclosure timing

## Questions?

If you have questions about this security policy or need clarification on the reporting process, please:

- Open a [discussion](https://github.com/hiteshshetty-dev/offline-detector/discussions) for general security questions
- Email us for sensitive inquiries about the security process
- Check our [documentation](https://github.com/hiteshshetty-dev/offline-detector/blob/main/packages/core/README.md) for security best practices

---

**Last updated**: [2025-10-02]  
**Policy version**: 1.0
