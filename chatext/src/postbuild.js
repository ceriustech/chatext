import fs from 'fs';
import path from 'path';

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

// Replace the paths in manifest.json
let manifestJsonData = JSON.parse(fs.readFileSync(manifestJsonPath, 'utf-8'));
manifestJsonData.web_accessible_resources = jsFiles.map((file) => ({
	resources: [`dist/${file}`],
	matches: ['<all_urls>'],
}));
fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestJsonData, null, 2));
