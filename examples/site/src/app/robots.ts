import { MetadataRoute } from 'next';

const siteUrl = 'https://hiteshshetty-dev.github.io';
const basePath = '/offline-detector';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `${siteUrl}${basePath}`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
