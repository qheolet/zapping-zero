import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/readTime.ts";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://localhost:4502/",
  integrations: [mdx(), sitemap(), solidJs()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});