import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';
import { handleFileUpload } from './handleFileUpload';
import stageFilesForUpload from './stageFilesForUpload';

// Global variable to store uploaded files
// let uploadedFiles = [];

// async function handleClick() {
// 	const MAX_FILES = 5;
// 	const fileInput = document.createElement('input');
// 	fileInput.type = 'file';
// 	fileInput.accept = '.txt, .js, .py, .html, .css, .json, .csv, .docx, .pdf';
// 	fileInput.multiple = true; // Allow multiple files

// 	fileInput.addEventListener('change', async (event) => {
// 		const files = event.target.files;

// 		if (!files.length) {
// 			console.log('No file selected.');
// 			return;
// 		}

// 		if (files.length > MAX_FILES) {
// 			console.log(`You can't upload more than ${MAX_FILES} files.`);
// 			return;
// 		}

// 		// const file = event.target.files[0];
// 		for (let i = 0; i < files.length; i++) {
// 			const file = files[i];
// 			const text = await handleFileUpload(file).catch((err) => {
// 				console.error('Error while uploading file:', err);
// 			});

// 			if (!text) {
// 				console.log('Something went wrong during file upload');
// 				return;
// 			}

// 			const chunks = text.match(/[\s\S]{1,15000}/g);
// 			for (const [index, chunk] of chunks.entries()) {
// 				await submitConversation(chunk, index + 1, file.name);
// 				await waitForChatGPTReady();
// 			}
// 		}
// 	});

// 	fileInput.click();
// }

async function handleClick() {
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = '.txt, .js, .py, .html, .css, .json, .csv, .docx, .pdf';
	fileInput.multiple = true; // Allow multiple files

	fileInput.addEventListener('change', async (event) => {
		const files = event.target.files;
		stageFilesForUpload(files);
	});

	fileInput.click();
}

export default handleClick;
