import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './views/FileUploader';
import '../Image/AppIcon';

const tabs = [
	{
		id: 'file-upload-view',
		label: 'Upload Files',
		component: 'file-uploader-view',
	},
	// {
	// 	id: 'download-chats-view',
	// 	label: 'Download Chats',
	// 	component: 'chat-title-updater-view',
	// },
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
			background-color: rgba(0, 0, 0, 0);
			display: none;
			font-size: 12px;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: 20;
		}

		.modal-content {
			background-color: #fff;
			border-radius: 10px;
			margin: 15% auto;
			padding: 20px;
			min-height: 470px;
			max-width: 335px;
			width: 100%;
			position: relative;
			right: 25.25rem;
			bottom: 4rem;
		}

		.modal-header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: start;
			gap: 7px;
			position: relative;
		}

		.close-btn-wrapper {
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 12px;
			position: absolute;
			top: 0;
			right: 0.35rem;
			background-color: #ecdfed;
			padding: 5px;
			height: 18px;
		}

		.close {
			color: #000;
			font-size: 1.5rem;
		}

		.close:hover,
		.close:focus {
			color: #7e1e89;
			text-decoration: none;
			cursor: pointer;
		}

		.app-tittle {
			color: #000;
			font-size: 1.25rem;
			margin: 0;
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
					<div class="modal-header">
						<div class="logo-wrapper">
							<app-icon></app-icon>
						</div>
						<h1 class="app-tittle">ChatExt</h1>
						<div class="close-btn-wrapper">
							<span class="close" @click=${this.closeModal}>&times;</span>
						</div>
					</div>
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
