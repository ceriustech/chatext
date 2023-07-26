import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';

async function handleDragDrop(event) {
	event.preventDefault();
	const file = event.dataTransfer.files[0];
	if (file) {
		const text = await file.text();
		const chunks = text.match(/[\s\S]{1,15000}/g);

		for (const [index, chunk] of chunks.entries()) {
			await submitConversation(chunk, index + 1, file.name);
			await waitForChatGPTReady();
		}
	}
}

export default handleDragDrop;
