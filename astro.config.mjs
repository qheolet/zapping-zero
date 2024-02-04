import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
	site: "https://astro-cactus.chriswilliams.dev/",
	integrations: [mdx(), sitemap()],
	markdown:{
		remarkPlugins:[ remarkReadingTime ]
	}
});
