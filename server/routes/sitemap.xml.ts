import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.ts';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

  const otherRoutes = [
    { url: '/tentang', changefreq: 'yearly', priority: 0.5 },
    { url: '/tentang/kebijakan-privasi', changefreq: 'yearly', priority: 0.5 },
    { url: '/tentang/kebijakan-berkomentar', changefreq: 'yearly', priority: 0.5 },
  ];

  // Ekstrak kategori unik dan buat rutenya
  const categories = [...new Set(data.flatMap(item => item.category))]
    .map(category => ({
      url: `/kategori/${category.toLowerCase().replace(/\s+/g, '-')}`,
      changefreq: 'daily',
      priority: 0.8
    }));

  // Ekstrak label unik dan buat rutenya
  const tags = [...new Set(data.flatMap(item => item.tags))]
    .map(tags => ({
      url: `/label/${tags.toLowerCase().replace(/\s+/g, '-')}`,
      changefreq: 'daily',
      priority: 0.8
    }));

  // Buat rute untuk setiap item data
  const contentRoutes = data.map(item => ({
    url: item._path,
    changefreq: 'daily',
    priority: 0.9
  }));

  // Gabungkan semua rute
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    ...contentRoutes,
    ...otherRoutes,
    ...categories,
		...tags
  ];

  const sitemap = generateSitemap(routes);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemap);
});
