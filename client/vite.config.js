import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/components/Container/Container.js'),
				index: resolve(__dirname, 'src/index.html'),
				styles: resolve(__dirname, 'src/assets/index.css'),
			},
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: 'chunks/[name].js',
				assetFileNames: 'assets/[name][extname]',
			},
		},
	},
});
