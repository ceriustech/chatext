import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	build: {
		outDir: 'dist',
		lib: {
			entry: 'src/main.js',
			name: 'ChatExt',
			formats: ['es'],
		},
		rollupOptions: {
			external: /^lit/,
		},
		emptyOutDir: true,
	},
});
