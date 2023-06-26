import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the file URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory path of the current module
const __dirname = path.dirname(__filename);

// Define the array of file names to copy
const fileNames = ['popupContainer.js'];

// Define the source and destination directories
const sourceDir = path.join(__dirname, 'src');
const destinationDir = path.join(__dirname, 'dist');

// Copy the files from source to destination
fileNames.forEach((fileName) => {
	const sourcePath = path.join(sourceDir, fileName);
	const destinationPath = path.join(destinationDir, fileName);

	fs.copyFile(sourcePath, destinationPath, (err) => {
		if (err) {
			console.error(`Error copying ${fileName}:`, err);
		} else {
			console.log(`${fileName} copied successfully!`);
		}
	});
});
