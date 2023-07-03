import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the file URL of the current module to a file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory path of the current module
const __dirname = path.dirname(__filename);

// Path to the dist folder
const distFolderPath = path.join(__dirname, 'dist');

// Fetch all the file names in the dist folder
const distFiles = fs.readdirSync(distFolderPath);

// Find the .js files
const jsFiles = distFiles.filter((file) => file.endsWith('.js'));

// Path to content.js and manifest.json
const contentJsPath = path.join(__dirname, 'content.js');
const manifestJsonPath = path.join(__dirname, 'manifest.json');

// Replace the paths in content.js
let contentJsData = fs.readFileSync(contentJsPath, 'utf-8');
jsFiles.forEach((file) => {
	contentJsData = contentJsData.replace(`dist/${file}`, `dist/${file}`);
});
fs.writeFileSync(contentJsPath, contentJsData);

// Load the manifest.json
let manifestJsonData = JSON.parse(fs.readFileSync(manifestJsonPath, 'utf-8'));

// Add the required entry to web_accessible_resources
const entryToAdd = {
	resources: jsFiles.map((file) => `dist/${file}`),
	matches: ['<all_urls>'],
};
if (!manifestJsonData.web_accessible_resources) {
	manifestJsonData.web_accessible_resources = [entryToAdd];
} else {
	manifestJsonData.web_accessible_resources.push(entryToAdd);
}

// Write the updated manifest.json
fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestJsonData, null, 2));
