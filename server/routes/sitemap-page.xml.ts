import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.ts';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  // Buat rute untuk setiap item data
  const contentRoutes = data?.sort(
		(a, b) =>
			new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
	).map(item => ({
		url: item._path ? item._path.replace('pages', 'page').replace('articles', 'artikel') : '/',
		changefreq: 'yearly',
		priority: 0.5,
		lastmod: item.updated_at
	})).filter((items) => items.url.includes('/page'));

  // Gabungkan semua rute
  const routes = [
    ...contentRoutes,
  ];

  const sitemap = generateSitemap(routes);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemap);
});
