// server/utils/sitemap.ts

export function generateSitemap(routes: RouteData[]) {
  const sitemapEntries = routes.map((route) => `
    <url>
      <loc>${process.env.BASE_URL}${route.url}</loc>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries}
    </urlset>`;
}
