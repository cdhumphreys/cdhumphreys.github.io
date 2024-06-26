

import { defineConfig } from 'astro/config';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            transformer: 'lightningcss',

            lightningcss: {
                targets: browserslistToTargets(browserslist('last 6 versions, not dead, >= 0.1%')),
            }
        }
    }
});