import { MetadataRoute } from 'next';

const siteUrl = 'https://hiteshshetty-dev.github.io';
const basePath = '/offline-detector';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `${siteUrl}${basePath}`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
