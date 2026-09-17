// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://rayhan.ch',
    integrations: [
        sitemap({
            // 404 and 500 are excluded by the integration itself.
            i18n: {
                defaultLocale: 'en',
                locales: { en: 'en', id: 'id' },
            },
        }),
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'id'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
