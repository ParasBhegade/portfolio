export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: 'https://parasbhegade.me/sitemap.xml',
    host: 'https://parasbhegade.me',
  };
}
