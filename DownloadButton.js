class DownloadButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.fileInput = document.createElement('input');
		this.fileInput.type = 'file';
		this.fileInput.accept =
			'.txt, .js, .py, .html, .css, .json, .csv, .docx, .pdf';

		this.progressContainer = document.createElement('div');
		this.progressContainer.style.width = '100%';
		this.progressContainer.style.height = '6px';
		this.progressContainer.style.border = '1px solid black';

		this.progressBar = document.createElement('div');
		this.progressBar.style.width = '0%';
		this.progressBar.style.height = '100%';
		this.progressBar.style.backgroundColor = 'blue';

		this.progressContainer.appendChild(this.progressBar);
		this.button = document.createElement('button');
		this.button.textContent = 'Submit File';
		this.button.style.backgroundColor = 'green';
		this.button.style.color = 'white';
		this.button.style.padding = '5px';
		this.button.style.border = 'none';
		this.button.style.borderRadius = '5px';
		this.button.style.margin = '5px auto';
		this.button.style.width = '100px';
	}

	connectedCallback() {
		this.button.addEventListener('click', () => this.handleClick());
		this.shadowRoot.appendChild(this.button);
		this.shadowRoot.appendChild(this.progressContainer);
	}

	async handleClick() {
		this.fileInput.click();
		this.fileInput.addEventListener('change', async (event) => {
			const file = event.target.files[0];
			const text = await file.text();
			const chunks = text.match(/[\s\S]{1,15000}/g);
			for (let i = 0; i < chunks.length; i++) {
				await this.submitConversation(chunks[i], i + 1, file.name);
				this.progressBar.style.width = `${((i + 1) / chunks.length) * 100}%`;
				let chatgptReady = false;
				while (!chatgptReady) {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					chatgptReady = !document.querySelector(
						'.text-2xl > span:not(.invisible)'
					);
				}
			}
			this.progressBar.style.backgroundColor = 'green';
		});
	}

	async submitConversation(text, part, filename) {
		const textarea = document.querySelector("textarea[tabindex='0']");
		const enterKeyEvent = new KeyboardEvent('keydown', {
			bubbles: true,
			cancelable: true,
			keyCode: 13,
		});
		textarea.value = `Part ${part} of ${filename}: \n\n ${text}`;
		textarea.dispatchEvent(enterKeyEvent);
	}
}

customElements.define('download-button', DownloadButton);
