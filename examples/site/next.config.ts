import type { NextConfig } from 'next';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  output: 'export',
  basePath: '/offline-detector',
  /* config options here */
};

export default nextConfig;
