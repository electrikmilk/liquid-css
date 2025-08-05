import { defineConfig } from 'vite';
import viteSVG from 'vite-svg';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteSVG({default: 'raw'})
    ],
});
