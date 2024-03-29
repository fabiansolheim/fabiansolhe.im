import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://fabiansolhe.im',
  adapter: vercel()
});