// server/utils/sitemap.ts

export function generateSitemap(routes: RouteData[]) {
	const sitemapEntries = routes.map((route) => `
    <url>
      <loc>${process.env.BASE_URL}${route.url}</loc>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
      <lastmod>${route.lastmod}</lastmod>
    </url>
  `).join('');

	return `<?xml version="1.0" encoding="UTF-8"?>
	<?xml-stylesheet href="/stylesheet.xsl" type="text/xsl"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${sitemapEntries}
	</urlset>`;
	}
	
	export function generateSitemapIndex(sitemapUrls: { url: string; lastmod: string }[]) {
		return `<?xml version="1.0" encoding="UTF-8"?>
		<?xml-stylesheet href="/stylesheet.xsl" type="text/xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(sitemap => `<sitemap><loc>${sitemap.url}</loc><lastmod>${sitemap.lastmod || ''}</lastmod></sitemap>`).join('\n')}
</sitemapindex>`;
}
