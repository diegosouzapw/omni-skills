import { defineConfig } from 'astro/config';
import critters from 'astro-critters';
import compress from '@playform/compress';

export default defineConfig({
  integrations: [
    critters(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
});

// Use this only after measuring that Astro-native changes were not enough.
// Validate that your hosting/build pipeline is not already applying overlapping optimization.
