import { defineEventHandler } from 'h3';
import { generateSitemap } from '../../utils/sitemap.ts';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  const data = await serverQueryContent(event).find();

	const otherRoutes = [
		{
			url: '/tentang',
			changefreq: 'yearly',
			priority: 0.5
		},
		{
			url: '/tentang/kebijakan-privasi',
			changefreq: 'yearly',
			priority: 0.5
		},
		{
			url: '/tentang/kebijakan-berkomentar',
			changefreq: 'yearly',
			priority: 0.5
		},
	];

  const routes = data.map(item => ({
    url: item._path,
    changefreq: 'daily',
    priority: 0.8
  }));

	otherRoutes.map((item) => routes.push(item));
  routes.unshift({ url: '/', changefreq: 'daily', priority: 1.0 });

  const sitemap = generateSitemap(routes);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemap);
});
