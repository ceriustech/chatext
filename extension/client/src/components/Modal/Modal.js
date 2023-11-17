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
			min-height: 454px;
			max-width: 365px;
			width: 100%;
			position: relative;
			right: 30.25rem;
		}

		.modal-header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: start;
			gap: 5px;
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							width="35px"
							height="35px"
						>
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0a"
								x1="14.296"
								x2="14.296"
								y1="42.833"
								y2="53.022"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#6dc7ff" />
								<stop offset="1" stop-color="#e6abff" />
							</linearGradient>
							<path
								fill="url(#UC11dU6fpD1Whu1sZEZF0a)"
								d="M11.702,43.702l6.596,6.596C18.926,50.926,18.481,52,17.593,52H12c-1.105,0-2-0.895-2-2 v-5.593C10,43.519,11.074,43.074,11.702,43.702z"
							/>
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0b"
								x1="32"
								x2="32"
								y1="8"
								y2="55.938"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#1a6dff" />
								<stop offset="1" stop-color="#c822ff" />
							</linearGradient>
							<path
								fill="url(#UC11dU6fpD1Whu1sZEZF0b)"
								d="M55,20h-1v-6c0-1.654-1.346-3-3-3v-1c0-1.103-0.897-2-2-2H15c-1.103,0-2,0.897-2,2v1 c-1.654,0-3,1.346-3,3v6H9c-1.654,0-3,1.346-3,3v6v1v21c0,2.757,2.243,5,5,5h42c2.757,0,5-2.243,5-5V31v-2v-6 C58,21.346,56.654,20,55,20z M55,22c0.552,0,1,0.448,1,1v2.026c-0.584-0.442-1.257-0.773-2-0.925V22H55z M15,10h34v1H15V10z M13,13 h38c0.552,0,1,0.448,1,1v10h-9.929c-1.007,0-1.94,0.5-2.497,1.337l-2.813,4.218C36.575,29.833,36.265,30,35.929,30h-7.857 c-0.336,0-0.646-0.167-0.833-0.446l-2.813-4.216C23.869,24.5,22.936,24,21.929,24H12V14C12,13.448,12.448,13,13,13z M9,22h1v2.101 c-0.743,0.152-1.416,0.482-2,0.925V23C8,22.448,8.448,22,9,22z M56,51c0,1.654-1.346,3-3,3H11c-1.654,0-3-1.346-3-3V30v-1 c0-1.654,1.346-3,3-3h10.929c0.336,0,0.646,0.167,0.833,0.446l2.813,4.216C26.131,31.5,27.064,32,28.071,32h7.857 c1.007,0,1.94-0.5,2.497-1.337l2.813-4.218C41.425,26.167,41.735,26,42.071,26H53c1.654,0,3,1.346,3,3v2V51z"
							/>
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0c"
								x1="33"
								x2="33"
								y1="8"
								y2="55.938"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#1a6dff" />
								<stop offset="1" stop-color="#c822ff" />
							</linearGradient>
							<path fill="url(#UC11dU6fpD1Whu1sZEZF0c)" d="M21 17H45V19H21z" />
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0d"
								x1="49"
								x2="49"
								y1="8"
								y2="55.938"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#1a6dff" />
								<stop offset="1" stop-color="#c822ff" />
							</linearGradient>
							<path fill="url(#UC11dU6fpD1Whu1sZEZF0d)" d="M44 50H54V52H44z" />
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0e"
								x1="49"
								x2="49"
								y1="8"
								y2="55.938"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#1a6dff" />
								<stop offset="1" stop-color="#c822ff" />
							</linearGradient>
							<path fill="url(#UC11dU6fpD1Whu1sZEZF0e)" d="M44 46H54V48H44z" />
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0f"
								x1="32"
								x2="32"
								y1="8"
								y2="55.938"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#1a6dff" />
								<stop offset="1" stop-color="#c822ff" />
							</linearGradient>
							<path fill="url(#UC11dU6fpD1Whu1sZEZF0f)" d="M27 21H37V23H27z" />
							<linearGradient
								id="UC11dU6fpD1Whu1sZEZF0g"
								x1="32"
								x2="32"
								y1="8"
								y2="55.938"
								gradientUnits="userSpaceOnUse"
								spreadMethod="reflect"
							>
								<stop offset="0" stop-color="#1a6dff" />
								<stop offset="1" stop-color="#c822ff" />
							</linearGradient>
							<path fill="url(#UC11dU6fpD1Whu1sZEZF0g)" d="M29 25H35V27H29z" />
						</svg>
						<h1 class="app-tittle">ChatExt</h1>
					</div>
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
