import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';
import { handleFileUpload } from './handleFileUpload';

async function handleClick() {
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = '.txt, .js, .py, .html, .css, .json, .csv, .docx, .pdf';

	fileInput.addEventListener('change', async (event) => {
		if (!event.target.files.length) {
			console.log('No file selected.');
			return;
		}

		const file = event.target.files[0];
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
	});

	fileInput.click();
}

export default handleClick;