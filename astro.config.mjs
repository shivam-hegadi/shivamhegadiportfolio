import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shivamhegadi.systems',
  output: 'static',
  integrations: [sitemap()],
});
