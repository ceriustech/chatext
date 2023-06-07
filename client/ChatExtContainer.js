class ChatExtContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const style = document.createElement('style');
		style.textContent = `
        .chat-ext-button {
            background-color: #D1D5DB;
            color: #7e1e89;
						font-weight: 700;
            padding: 5px;
            border: none;
            border-radius: 5px;
            margin: 0 auto 10px;
            width: 150px;
        }

        .chat-ext-button:hover {
          cursor: pointer;
        }

        .chat-ext-progress-bar {
            width: 0%;
            height: 100%;
        }

        .chat-ext-progress-container {
          width: 90%;
          height: 6px;
          border: 1px solid #000;
					margin-bottom: 10px;
        }

				@media screen and (max-width: 768px) {
					chat-ext-progress-container {
						padding: 0 12px;
					}
				}
    `;

		this.shadowRoot.appendChild(style);
		this.fileInput = document.createElement('input');
		this.fileInput.type = 'file';
		this.fileInput.accept =
			'.txt, .js, .py, .html, .css, .json, .csv, .docx, .pdf';

		this.progressContainer = document.createElement('div');
		this.progressContainer.classList.add('chat-ext-progress-container');

		this.progressBar = document.createElement('div');
		this.progressBar.classList.add('chat-ext-progress-bar');
		this.progressBar.style.width = '0%';
		this.progressBar.style.height = '100%';
		this.progressBar.style.backgroundColor = 'blue';

		this.progressContainer.appendChild(this.progressBar);
		this.button = document.createElement('button');
		this.button.classList.add('chat-ext-button');
		this.button.textContent = 'Submit File To Chat';
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
		try {
			const textarea = document.querySelector('#prompt-textarea');
			if (!textarea) {
				console.error('Textarea not found');
				return;
			}

			// Create and dispatch an 'input' event on the textarea
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
}

customElements.define('chat-ext-container', ChatExtContainer);
