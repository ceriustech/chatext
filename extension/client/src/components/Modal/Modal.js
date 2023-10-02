import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './views/FileUploader';
import './views/ChatTitleUpdater';

const tabs = [
	{
		id: 'file-upload-view',
		label: 'Upload Files',
		component: 'file-uploader-view',
	},
	{
		id: 'rename-chat-view',
		label: 'Rename Chats',
		component: 'chat-title-updater-view',
	},
];

class Modal extends LitElement {
	static properties = {
		isOpen: { type: Boolean },
		activeTab: { type: String },
	};

	constructor() {
		super();
		this.isOpen = false;
		this.activeTab = tabs[0].id;
	}

	closeModal() {
		this.isOpen = false;
		this.requestUpdate();
	}

	setActiveTab(event) {
		this.activeTab = event.currentTarget.getAttribute('data-tab');
		this.requestUpdate();
	}

	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has('activeTab')) {
			const placeholder = this.shadowRoot.querySelector(
				'#tab-content-placeholder'
			);
			placeholder.innerHTML = ''; // Clear the placeholder

			const activeTab = tabs.find((tab) => tab.id === this.activeTab);
			if (activeTab) {
				const el = document.createElement(activeTab.component);
				el.id = activeTab.id;
				el.className = 'tab-content';
				placeholder.appendChild(el);
			}
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
			overflow: hidden;
			background-color: rgb(0, 0, 0);
			background-color: rgba(0, 0, 0, 0);
		}

		.modal-content {
			background-color: #fefefe;
			border-radius: 10px;
			margin: 15% auto;
			padding: 20px;
			max-width: 365px;
			width: 100%;
			position: relative;
			right: 30.25rem;
		}

		.close {
			color: #aaa;
			font-size: 28px;
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

		.tab-container {
			cursor: pointer;
			display: flex;
			flex-direction: row;
			gap: 1.5rem;
			font-size: 12px;
			margin-bottom: 10px;
		}

		.tab {
			font-size: 0.62rem;
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
					<span class="close" @click=${this.closeModal}>&times;</span>
					<div class="tab-view-container">
						<div class="tab-container">
							${tabs.map(
								(tab) => html`
									<div
										class="tab"
										@click=${this.setActiveTab}
										data-tab=${tab.id}
									>
										<h2
											style=${styleMap({
												color: this.activeTab === tab.id ? '#000' : '#6c6f72',
												borderBottom:
													this.activeTab === tab.id ? '2px solid #000' : 'none',
											})}
										>
											${tab.label}
										</h2>
									</div>
								`
							)}
						</div>
						<div class="tab-view">
							<div id="tab-content-placeholder"></div>
						</div>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('chatext-modal-container', Modal);

export default Modal;
