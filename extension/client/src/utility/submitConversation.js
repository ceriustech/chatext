import { PROMPT } from '../promptController';

async function submitConversation(text, part, filename) {
	try {
		const textarea = document.querySelector('#prompt-textarea');
		if (!textarea) {
			console.error('Textarea not found');
			return;
		}

		const inputEvent = new Event('input', {
			bubbles: true,
			cancelable: true,
		});

		textarea.value = `Part ${part} of ${filename}: ${PROMPT} \n\n ${text}`;

		textarea.dispatchEvent(inputEvent);

		let submitButton;
		const target = document.querySelector('[data-testid="send-button"]');

		if (target) {
			submitButton = target;
		}
		submitButton.click();
	} catch (error) {
		console.error('Error in submitConversation:', error);
	}
}

export default submitConversation;
