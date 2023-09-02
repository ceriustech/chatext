import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';
import { handleFileUpload } from './handleFileUpload';

async function handleDragDrop(event) {
	const MAX_FILES = 5;
	event.preventDefault();
	const files = event.dataTransfer.files;

	if (files.length > MAX_FILES) {
		console.log(`You can't upload more than ${MAX_FILES} files.`);
		return;
	}

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const text = await handleFileUpload(file).catch((err) => {
			console.error('Error while uploading file:', err);
		});

		if (!text) {
			// Something went wrong during file upload, don't continue processing
			return;
		}

		const chunks = text.match(/[\s\S]{1,15000}/g);
		for (const [index, chunk] of chunks.entries()) {
			await submitConversation(chunk, index + 1, file.name);
			await waitForChatGPTReady();
		}
	}
}

export default handleDragDrop;
