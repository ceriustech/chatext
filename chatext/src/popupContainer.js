import { html, component } from 'haunted';

const PopupContainer = () => {
	const popupInfo = {
		docText: {
			header: 'ChatEXT',
			subHeader: 'Upload files to ChatGPT',
			description: 'Click here for more info',
			tooltip: 'Click the button or icon to learn more',
		},
	};
	const docsHint = '';

	return html`
		<style>
			:host {
				max-width: 1280px;
				margin: 0 auto;
				padding: 2rem;
				text-align: center;
			}

			.logo {
				height: 6em;
				padding: 1.5em;
				will-change: filter;
				transition: filter 300ms;
			}
			.logo:hover {
				filter: drop-shadow(0 0 2em #646cffaa);
			}

			.header-container h1 {
				font-size: 3em;
				margin-top: 0;
				margin-bottom: 12px;
			}

			.header-container h {
				margin-top: 0;
			}

			.read-the-docs {
				color: #888;
				margin-top: 50px;
			}

			a {
				font-weight: 500;
				color: #646cff;
				text-decoration: inherit;
			}
			a:hover {
				color: #535bf2;
			}

			::slotted(h1) {
				font-size: 3.2em;
				line-height: 1.1;
			}

			.button {
				border-radius: 25px;
				color: #7e1e89;
				border: 1px solid transparent;
				padding: 0.6em;
				font-size: 1.25em;
				font-weight: 700;
				font-family: inherit;
				background-color: #d1d5db;
				cursor: pointer;
				transition: border-color 0.25s;
			}

			.button p {
				margin: 0;
			}

			.button:hover {
				border-color: #7e1e89;
			}
			.button:focus,
			.button:focus-visible {
				outline: 4px auto -webkit-focus-ring-color;
			}

			@media (prefers-color-scheme: light) {
				a:hover {
					color: #747bff;
				}
				.button {
					background-color: #f9f9f9;
				}
			}
		</style>
		<div>
			<a href="https://vitejs.dev" target="_blank">
				<img src="/assets/icons/icon-256.svg" class="logo" alt="Vite logo" />
			</a>
		</div>
		<div class="header-container">
			<h1>${popupInfo.docText.header}</h1>
			<h2>${popupInfo.docText.subHeader}</h2>
		</div>
		<a href="https://vitejs.dev" target="_blank">
			<div class="button">
				${popupInfo.docText.description}</p>
			</div>
		</a>
	
		<p class="read-the-docs">${popupInfo.docText.tooltip}</p>
	`;
};

customElements.define('popup-container', component(PopupContainer));
