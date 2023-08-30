import { LitElement, html, css } from 'lit';
import './views/FileUploader';

class Modal extends LitElement {
	static properties = {
		isOpen: { type: Boolean },
	};

	constructor() {
		super();
		this.isOpen = false;
	}

	closeModal() {
		this.isOpen = false;
		this.requestUpdate();
	}

	switchTab(event) {
		// Get the clicked tab element
		const clickedTab = event.currentTarget;

		// Get the value of data-tab attribute
		const tabName = clickedTab.getAttribute('data-tab');

		// Get all tab-content elements
		const allTabContents = this.shadowRoot.querySelectorAll('.tab-content');

		// Hide all tab content elements
		allTabContents.forEach((tabContent) => {
			tabContent.style.display = 'none';
		});

		// Show the tab content that corresponds to the clicked tab
		const targetTabContent = this.shadowRoot.querySelector(`#${tabName}`);
		if (targetTabContent) {
			targetTabContent.style.display = 'block';
		}
	}

	static styles = css`
		.modal-container {
			display: none;
			font-size: 12px;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: auto;
			background-color: rgb(0, 0, 0);
			background-color: rgba(0, 0, 0, 0);
		}

		.modal-content {
			background-color: #fefefe;
			border-radius: 10px;
			margin: 15% auto;
			padding: 20px;
			border: 1px solid #888;
			max-width: 410px;
			width: 100%;
			position: relative;
			right: 29rem;
		}

		.close {
			color: #aaa;
			font-size: 28px;
			font-weight: bold;
			position: absolute;
			top: 0;
			right: 1rem;
		}

		.close:hover,
		.close:focus {
			color: #ab68ff;
			text-decoration: none;
			cursor: pointer;
		}

		.app-tittle {
			color: #000;
			font-size: 1.25rem;
			margin-top: 0;
		}
	`;

	render() {
		return html`
			<div
				id="chatext-modal"
				class="modal-container"
				style="display: ${this.isOpen ? 'block' : 'none'}"
			>
				<div class="modal-content">
					<h1 class="app-tittle">ChatExt</h1>
					<div class="tab-container">
						<button
							class="tab"
							@click=${this.switchTab}
							data-tab="file-upload-view"
						>
							Upload Files
						</button>
						<button
							class="tab"
							@click=${this.switchTab}
							data-tab="rename-chat-view"
						>
							Rename Chats
						</button>
					</div>
					<span class="close" @click=${this.closeModal}>&times;</span>
					<file-uploader-container
						id="file-upload-view"
						class="tab-content"
					></file-uploader-container>
					<div id="rename-chat-view" class="tab-content">Tab 2</div>
				</div>
			</div>
		`;
	}
}

customElements.define('chatext-modal-container', Modal);

export default Modal;
