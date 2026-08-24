import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { defineHastPlugin } from 'satteri';

const externalLinksNewTab = defineHastPlugin({
  name: 'external-links-new-tab',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
        ctx.setProperty(node, 'target', '_blank');
        ctx.setProperty(node, 'rel', 'noopener noreferrer');
      }
    }
  }
});

export default defineConfig({
  site: 'https://danmaek.com',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    processor: satteri({
      hastPlugins: [externalLinksNewTab]
    })
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404/') && !page.includes('/search/')
    })
  ],
  build: {
    format: 'directory'
  }
});
