javascript: (function () {
	const button = document.createElement('button');
	button.textContent = 'Submit File';
	button.style.backgroundColor = 'green';
	button.style.color = 'white';
	button.style.padding = '5px';
	button.style.border = 'none';
	button.style.borderRadius = '5px';
	button.style.margin = '5px auto';
	button.style.width = '100px';

	const progressContainer = document.createElement('div');
	progressContainer.style.width = '100%';
	progressContainer.style.height = '5px';
	progressContainer.style.backgroundColor = 'grey';

	const progressBar = document.createElement('div');
	progressBar.style.width = '0%';
	progressBar.style.height = '100%';
	progressBar.style.backgroundColor = 'blue';

	progressContainer.appendChild(progressBar);

	button.addEventListener('click', () => {
		const fileInput = document.createElement('input');
		fileInput.type = 'file';
		fileInput.accept = '.txt, .js, .py, .html, .css, .json, .csv';

		fileInput.addEventListener('change', async (event) => {
			const file = event.target.files[0];
			const text = await file.text();
			const chunks = text.match(/[\s\S]{1,15000}/g);

			for (let i = 0; i < chunks.length; i++) {
				await submitConversation(chunks[i], i + 1, file.name);
				progressBar.style.width = `${((i + 1) / chunks.length) * 100}%`;
				let chatgptReady = false;
				while (!chatgptReady) {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					chatgptReady = !document.querySelector(
						'.text-2xl > span:not(.invisible)'
					);
				}
			}
			progressBar.style.backgroundColor = 'green';
		});

		fileInput.click();
	});

	const targetElement =
		document.querySelector('#prompt-textarea').parentElement;
	targetElement.insertAdjacentElement('beforebegin', button);
	button.insertAdjacentElement('afterend', progressContainer);

	async function submitConversation(text, part, filename) {
		const textarea = document.querySelector("textarea[tabindex='0']");
		const enterKeyEvent = new KeyboardEvent('keydown', {
			bubbles: true,
			cancelable: true,
			keyCode: 13,
		});
		textarea.value = `Part ${part} of ${filename}: \n\n ${text}`;
		textarea.dispatchEvent(enterKeyEvent);
	}
})();
