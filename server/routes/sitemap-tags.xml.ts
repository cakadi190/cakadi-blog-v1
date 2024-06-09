import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.ts';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  // Ekstrak label unik dan buat rutenya
  const tags = [...new Set(data.flatMap(item => item.tags))]
    ?.map(tags => ({
				url: `/label/${tags?.toLowerCase().replace(/\s+/g, '-')}`,
				changefreq: 'monthly',
				priority: 0.8,
				lastmod: data[0].updated_at,
			}));

  // Gabungkan semua rute
  const routes = [
    ...tags,
  ];

  const sitemap = generateSitemap(routes);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemap);
});
