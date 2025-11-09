import type { Metadata } from 'next';
import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://hiteshshetty-dev.github.io';
const basePath = '/offline-detector';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}${basePath}`),
  title: {
    default:
      'Offline Detector - Real-time Network Connectivity Detection Library',
    template: '%s | Offline Detector',
  },
  description:
    'A lightweight TypeScript library for detecting online/offline status in browsers with modern bundler support. Features intelligent network verification, debounced state changes, and flexible configuration options. Minimal dependencies, tree-shakable, and works with any bundler.',
  keywords: [
    'offline detector',
    'network detection',
    'online offline status',
    'connectivity monitoring',
    'TypeScript library',
    'browser network',
    'network status',
    'offline detection',
    'web connectivity',
    'network monitoring',
    'JavaScript library',
    'bundler agnostic',
    'tree-shakable',
    'lightweight library',
  ],
  authors: [
    { name: 'Hitesh Shetty', url: 'https://hiteshshetty.com' },
    { name: 'Hitesh Shetty', url: 'https://github.com/hiteshshetty-dev' },
  ],
  creator: 'Hitesh Shetty',
  publisher: 'Hitesh Shetty',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}${basePath}`,
    siteName: 'Offline Detector',
    title:
      'Offline Detector - Real-time Network Connectivity Detection Library',
    description:
      'A lightweight TypeScript library for detecting online/offline status in browsers. Features intelligent network verification, debounced state changes, and flexible configuration options.',
    images: [
      {
        url: `${siteUrl}${basePath}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Offline Detector - Network Connectivity Detection Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offline Detector - Real-time Network Connectivity Detection',
    description:
      'A lightweight TypeScript library for detecting online/offline status in browsers with modern bundler support.',
    creator: '@hiteshshetty-dev',
    images: [`${siteUrl}${basePath}/og-image.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}${basePath}`,
  },
  category: 'technology',
  classification: 'Software Library',
  icons: {
    icon: `${siteUrl}${basePath}/favicon.ico`,
    apple: `${siteUrl}${basePath}/favicon.ico`,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Offline Detector',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
