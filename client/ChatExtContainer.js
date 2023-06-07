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

		// Define a function to handle file change asynchronously
		const handleFileChange = async (event) => {
			// Get the selected file from the file input element
			const file = event.target.files[0];

			// Read the contents of the file as text
			const text = await file.text();

			// Split the text into chunks of up to 15000 characters
			const chunks = text.match(/[\s\S]{1,15000}/g);

			// Iterate over each chunk and submit the conversation
			for (const [index, chunk] of chunks.entries()) {
				// Submit the current chunk of the conversation along with its index and file name
				await this.submitConversation(chunk, index + 1, file.name);

				// Update the progress bar width based on the current chunk's index
				this.progressBar.style.width = `${
					((index + 1) / chunks.length) * 100
				}%`;

				// Wait for chatGPT to be ready before processing the next chunk
				await this.waitForChatGPTReady();
			}

			// Set the progress bar background color to green when all chunks are processed
			this.progressBar.style.backgroundColor = 'green';
		};

		// Add the handleFileChange function as a 'change' event listener to the file input element
		this.fileInput.addEventListener('change', handleFileChange);
	}

	async waitForChatGPTReady() {
		// Create and return a new promise
		return new Promise((resolve) => {
			// Set an interval that repeatedly checks if chatGPT is ready
			const interval = setInterval(() => {
				// If chatGPT is ready (the desired element is not found), clear the interval and resolve the promise
				if (!document.querySelector('.text-2xl > span:not(.invisible)')) {
					clearInterval(interval);
					resolve();
				}
			}, 1000);
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
