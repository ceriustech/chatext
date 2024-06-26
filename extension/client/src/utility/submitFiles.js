// Handle file submission
import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';
import { handleFileUpload } from './handleFileUpload';
import { globalStore } from '../state/globalStore';

async function submitFiles() {
	for (const file of globalStore.uploadedFiles) {
		const text = await handleFileUpload(file).catch((err) => {
			console.error('Error while uploading file:', err);
			return null;
		});

		if (!text) {
			console.log('Something went wrong during file upload');
			return;
		}

		const chunks = text.match(/[\s\S]{1,15000}/g);
		console.log('🚀 ~ file: submitFiles.js:19 ~ submitFiles ~ chunks:', chunks);

		for (const [index, chunk] of chunks.entries()) {
			await submitConversation(chunk, index + 1, file.name);
			await waitForChatGPTReady();
		}
		globalStore.removeFile(file.name);
	}

	this.requestUpdate();
}

export default submitFiles;
