

import { writeFile } from 'node:fs/promises';
import { globby } from 'globby';
import prettier from 'prettier';

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const pages = await globby([
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'pages/**/*.js',
    'pages/**/*.mdx',
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.js',
    'app/**/*.mdx',
    '!pages/_*.tsx',
    '!pages/_*.ts',
    '!pages/_*.js',
    '!pages/api',
    '!app/api',
  ]);

  const baseUrl = 'https://seeyouthursday.dev'; 

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace(/^(pages|app)/, '')
            .replace(/\.(tsx|ts|js|mdx)$/, '')
            .replace(/\/page$/, '')
            .replace(/\/index$/, '')
            .replace(/^\/?/, '/'); 
          return `
            <url>
              <loc>${`${baseUrl}${path}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  await writeFile('public/sitemap.xml', formatted);
}

generateSitemap();