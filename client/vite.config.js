import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	build: {
		minify: true,
		rollupOptions: {
			input: {
				main: 'src/main.js',
				index: 'index.html',
			},
			output: {
				format: 'es',
				entryFileNames: '[name].min.js',
				chunkFileNames: '[name]-[hash].min.js',
			},
		},
	},
});
