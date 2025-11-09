import React from 'react';

const siteUrl = 'https://hiteshshetty-dev.github.io';
const basePath = '/offline-detector';

export default function StructuredData() {
  const baseUrl = `${siteUrl}${basePath}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`,
        name: 'Offline Detector',
        description:
          'A lightweight TypeScript library for detecting online/offline status in browsers with modern bundler support.',
        url: baseUrl,
        author: {
          '@type': 'Person',
          '@id': 'https://hiteshshetty.com#person',
          name: 'Hitesh Shetty',
          url: 'https://hiteshshetty.com',
          sameAs: [
            'https://hiteshshetty.com',
            'https://github.com/hiteshshetty-dev',
          ],
        },
        publisher: {
          '@id': 'https://hiteshshetty.com#person',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${baseUrl}#software`,
        name: 'Offline Detector',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web Browser',
        description:
          'A lightweight TypeScript library for detecting online/offline status in browsers. Features intelligent network verification, debounced state changes, and flexible configuration options.',
        url: baseUrl,
        downloadUrl: 'https://www.npmjs.com/package/offline-detector',
        softwareVersion: '1.0.0',
        releaseNotes:
          'Initial release with comprehensive network detection capabilities',
        author: {
          '@id': 'https://hiteshshetty.com#person',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          ratingCount: '1',
        },
        featureList: [
          'Real-time network detection',
          'TypeScript support',
          'Lightweight and tree-shakable',
          'Bundler agnostic',
          'Intelligent network verification',
          'Debounced state changes',
          'Flexible configuration',
        ],
        screenshot: `${baseUrl}/og-image.webp`,
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
        name: 'Offline Detector',
        url: baseUrl,
        logo: `${baseUrl}/og-image.webp`,
        sameAs: [
          'https://hiteshshetty.com',
          'https://github.com/hiteshshetty-dev/offline-detector',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
