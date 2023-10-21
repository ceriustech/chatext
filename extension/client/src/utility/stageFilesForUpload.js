import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';
import { handleFileUpload } from './handleFileUpload';
import { globalStore } from '../state/globalStore';
import { MAX_FILES } from './utils';

let uploadedFiles = [];

async function stageFilesForUpload(files) {
	console.log("🚀 ~ file: stageFilesForUpload.js:8 ~ stageFilesForUpload ~ files:", files);
	
	if (files.length > MAX_FILES) {
		console.log(`You can't upload more than ${MAX_FILES} files.`);
		return;
	}

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		globalStore.addFile(file);

		const text = await handleFileUpload(file).catch((err) => {
			console.error('Error while uploading file:', err);
		});

		if (!text) {
			console.log('Something went wrong during file upload');
			return;
		}

		const chunks = text.match(/[\s\S]{1,15000}/g);
		for (const [index, chunk] of chunks.entries()) {
			await submitConversation(chunk, index + 1, file.name);
			await waitForChatGPTReady();
		}

		uploadedFiles.push({ file, text });
	}
}

export default stageFilesForUpload;
