import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.ts';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  // Buat rute untuk setiap item data
  const contentRoutes = data.map(item => ({
		url: item._path ? item._path.replace('pages', 'page').replace('articles', 'artikel') : '/',
		changefreq: 'daily',
		priority: 0.9,
		lastmod: item.updated_at
	})).filter((items) => items.url.includes('/artikel'));

  // Gabungkan semua rute
  const routes = [
    ...contentRoutes,
  ];

  const sitemap = generateSitemap(routes);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemap);
});
