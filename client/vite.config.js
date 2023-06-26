// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: 'src/components/Container/Container.js',
				index: 'src/index.html',
			},
		},
	},
});
