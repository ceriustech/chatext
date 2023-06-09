import submitConversation from './submitConversation';
import updateProgressBar from './updateProgressBar';
import waitForChatGPTReady from './waitForChatGPTReady';

async function handleClick() {
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = '.txt, .js, .py, .html, .css, .json, .csv, .docx, .pdf';

	fileInput.addEventListener('change', async (event) => {
		const file = event.target.files[0];
		const text = await file.text();
		const chunks = text.match(/[\s\S]{1,15000}/g);

		for (const [index, chunk] of chunks.entries()) {
			await submitConversation(chunk, index + 1, file.name);
			updateProgressBar(index + 1, chunks.length);

			await waitForChatGPTReady();
		}

		updateProgressBar(chunks.length, chunks.length, true);
	});

	fileInput.click();
}

export default handleClick;
