import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "url";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react({ include: /\.(js|jsx|ts|tsx)$/ }),
    ],
    server: {
        host: "0.0.0.0",
        port: 3000,
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
            { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
            { find: '@layout', replacement: fileURLToPath(new URL('./src/layout', import.meta.url)) },
            { find: '@menu-items', replacement: fileURLToPath(new URL('./src/menu-items', import.meta.url)) },
            { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
            { find: '@routes', replacement: fileURLToPath(new URL('./src/routes', import.meta.url)) },
            { find: '@store', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
            { find: '@themes', replacement: fileURLToPath(new URL('./src/themes', import.meta.url)) },
            { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
            { find: '@public', replacement: fileURLToPath(new URL('./public', import.meta.url))},
            { find: '@api', replacement: fileURLToPath(new URL('./src/api', import.meta.url))},
            { find: '@contexts', replacement: fileURLToPath(new URL('./src/contexts', import.meta.url))},
          ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'txt', 'css', 'html']
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]'
              } 
        }
    }
});
