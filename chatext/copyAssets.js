import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the file URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory path of the current module
const __dirname = path.dirname(__filename);

// Define the source and destination directories
const srcDir = path.join(__dirname, 'src', 'assets'); // The source directory path
const distDir = path.join(__dirname, 'dist', 'assets'); // The destination directory path

// Define a recursive function to copy files from source to destination
function copyFiles(srcPath, distPath) {
	// Read the contents of the source directory
	fs.readdirSync(srcPath).forEach((file) => {
		const srcFile = path.join(srcPath, file); // The path of the source file
		const distFile = path.join(distPath, file); // The path of the destination file

		if (fs.lstatSync(srcFile).isDirectory()) {
			// If the file is a directory, create the corresponding directory in the destination
			fs.mkdirSync(distFile, { recursive: true });
			copyFiles(srcFile, distFile); // Recursively copy files inside the directory
		} else {
			// If the file is not a directory, copy it to the destination
			fs.copyFileSync(srcFile, distFile);
		}
	});
}

// Call the copyFiles function to start copying files from source to destination
copyFiles(srcDir, distDir);
