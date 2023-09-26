// Handle file submission
import submitConversation from './submitConversation';
import waitForChatGPTReady from './waitForChatGPTReady';

async function submitFiles() {
	// Initialize variable to hold ChatGPT's prompt
	let chatGPTPrompt = '';

	for (const { file, text } of uploadedFiles) {
		const chunks = text.match(/[\s\S]{1,15000}/g);
		for (const [index, chunk] of chunks.entries()) {
			await submitConversation(chunk, index + 1, file.name);
			await waitForChatGPTReady();
		}
		chatGPTPrompt += `${file.name} Carefully read the file contents for this post and afterward respond with "File has been read".\n`;
	}

	// Check the number of files to generate ChatGPT's prompt
	if (uploadedFiles.length === 1) {
		chatGPTPrompt += 'How would you like me to help you with this file?';
	} else {
		chatGPTPrompt += 'How would you like me to help you with these files?';
	}

	// Submit the final prompt to ChatGPT
	await submitConversation(chatGPTPrompt, 'Final', 'Multiple Files');
	await waitForChatGPTReady();

	// Clear the uploadedFiles array and reset numFiles
	uploadedFiles = [];
	this.numFiles = 0;
	this.requestUpdate();
}

export default submitFiles;
