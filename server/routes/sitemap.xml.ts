import { defineEventHandler } from 'h3';
import { generateSitemapIndex } from '../../utils/sitemap.ts';

export default defineEventHandler(async (event) => {
  const sitemapUrls = ['posts', 'tags', 'category', 'page'].map(type => ({
		url: `${process.env.BASE_URL}/sitemap-${type}.xml`,
		lastmod: new Date().toISOString(),
	}));
  const sitemapIndexXml = generateSitemapIndex(sitemapUrls);

  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.end(sitemapIndexXml);
});
