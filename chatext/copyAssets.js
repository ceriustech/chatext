import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src', 'assets');
const distDir = path.join(__dirname, 'dist', 'assets');

function copyFiles(srcPath, distPath) {
	fs.readdirSync(srcPath).forEach((file) => {
		const srcFile = path.join(srcPath, file);
		const distFile = path.join(distPath, file);

		if (fs.lstatSync(srcFile).isDirectory()) {
			fs.mkdirSync(distFile, { recursive: true });
			copyFiles(srcFile, distFile);
		} else {
			fs.copyFileSync(srcFile, distFile);
		}
	});
}

copyFiles(srcDir, distDir);
