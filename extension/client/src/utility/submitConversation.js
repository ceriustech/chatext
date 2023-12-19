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

		// Wait for a short period before clicking the submit button
		setTimeout(() => {
			const submitButton = document.querySelector(
				'[data-testid="send-button"]'
			);
			if (submitButton) {
				// Dispatch a click event
				const clickEvent = new MouseEvent('click', {
					bubbles: true,
					cancelable: true,
					view: window,
				});
				submitButton.dispatchEvent(clickEvent);
			}
		}, 500);
	} catch (error) {
		console.error('Error in submitConversation:', error);
	}
}

export default submitConversation;
