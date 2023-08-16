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

		textarea.value = `Part ${part} of ${filename}: \n\n ${text}`;

		textarea.dispatchEvent(inputEvent);

		let submitButton;
		const target = document.querySelector(
			'button[style*="background-color: rgb(25, 195, 125)"]'
		);

		if (target) {
			submitButton = document.querySelector(
				'button[style*="background-color: rgb(25, 195, 125)"]'
			);
		} else {
			submitButton = document.querySelector(
				'button[style*="background-color: rgb(171, 104, 255)"]'
			);
		}
		submitButton.click();
	} catch (error) {
		console.error('Error in submitConversation:', error);
	}
}

export default submitConversation;
