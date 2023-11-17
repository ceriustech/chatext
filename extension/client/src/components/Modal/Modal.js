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
		}

		.modal-content {
			background-color: #fff;
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

		.logo-container {
			box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 5px 0px;
			border-radius: 25px;
			padding: 5px;
			display: flex;
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
						<div class="logo-container">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0,0,256,256"
								width="30px"
								height="30px"
							>
								<g
									fill="none"
									fill-rule="nonzero"
									stroke="none"
									stroke-width="1"
									stroke-linecap="butt"
									stroke-linejoin="miter"
									stroke-miterlimit="10"
									stroke-dasharray=""
									stroke-dashoffset="0"
									font-family="none"
									font-weight="none"
									font-size="none"
									text-anchor="none"
									style="mix-blend-mode: normal"
								>
									<g transform="scale(0.53333,0.53333)">
										<circle cx="240" cy="240" r="232" fill="#dec5e0"></circle>
										<path
											d="M58,270c0,23.878 3.607,46.913 10.306,68.591c6.122,19.81 -21.391,31.729 -31.431,13.588c-17.64,-31.874 -27.996,-68.34 -28.821,-107.152c-2.8,-131.674 103.19,-238.66 234.913,-237.008c20.754,0.26 23.55,30.088 3.183,34.09c-103.182,20.273 -188.15,110.121 -188.15,227.891z"
											fill="#faefde"
										></path>
										<circle cx="240" cy="240" r="189" fill="#faefde"></circle>
										<path
											d="M262,320v36c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22v-36c0,-12.15 9.85,-22 22,-22c12.16,0 22,9.84 22,22z"
											fill="#dec5e0"
										></path>
										<path
											d="M98.668,323.465c4.243,14.413 -15.615,23.023 -23.015,9.949c-30.645,-54.14 -33.448,-121.589 -4.493,-178.414c41.477,-82.247 131.573,-118.131 212.78,-98.905c14.688,3.477 12.159,24.986 -2.935,24.908c-127.325,-0.663 -217.866,121.765 -182.337,242.462z"
											fill="#dec5e0"
										></path>
										<circle cx="240" cy="163" r="59" fill="#dec5e0"></circle>
										<path
											d="M472,232h-35.176c-4.214,-104.93 -90.879,-189 -196.824,-189c-79.775,0 -148.628,47.665 -179.574,116.01c-0.299,0.518 -0.546,1.069 -0.724,1.651c-9.71,21.979 -15.511,46.051 -16.526,71.338h-27.018c4.229,-119.82 103.007,-215.999 223.842,-215.999c106.518,0 198.907,75.698 219.68,179.992c0.863,4.333 5.076,7.146 9.408,6.283c4.333,-0.863 7.146,-5.075 6.283,-9.408c-21.976,-110.343 -119.452,-192.867 -235.371,-192.867c-132.639,0 -240,107.341 -240,240c0,132.64 107.341,240 240,240c132.639,0 240,-107.341 240,-240c0,-4.418 -3.582,-8 -8,-8zM240,464c-120.835,0 -219.613,-96.179 -223.842,-216h34.842c4.418,0 8,-3.582 8,-8c0,-24.422 4.873,-47.724 13.679,-69h100.815c3.969,33.184 32.27,59 66.506,59c20.213,0 39.143,-8.991 51.935,-24.668c2.793,-3.423 2.283,-8.463 -1.141,-11.256c-3.422,-2.792 -8.462,-2.283 -11.256,1.141c-9.74,11.936 -24.152,18.783 -39.538,18.783c-28.122,0 -51,-22.879 -51,-51c0,-28.121 22.878,-51 51,-51c28.122,0 51,22.879 51,51c0,4.418 3.582,8 8,8h65.871c4.418,0 8,-3.582 8,-8c0,-4.418 -3.582,-8 -8,-8h-58.365c-3.969,-33.184 -32.27,-59 -66.506,-59c-34.236,0 -62.537,25.816 -66.506,59h-93.252c30.488,-57.072 90.658,-96 159.758,-96c99.804,0 181,81.196 181,181c0,99.804 -81.196,181 -181,181c-83.893,0 -156.239,-56.866 -175.933,-138.288c-1.039,-4.295 -5.362,-6.941 -9.657,-5.895c-4.294,1.038 -6.934,5.361 -5.895,9.656c20.462,84.596 96.875,150.527 191.485,150.527c105.945,0 192.61,-84.07 196.824,-189h27.018c-4.229,119.821 -103.007,216 -223.842,216z"
											fill="#7e1e89"
										></path>
										<path
											d="M256,155h-32c-4.418,0 -8,3.582 -8,8c0,4.418 3.582,8 8,8h32c4.418,0 8,-3.582 8,-8c0,-4.418 -3.582,-8 -8,-8z"
											fill="#7e1e89"
										></path>
										<path
											d="M240,386c16.542,0 30,-13.458 30,-30v-36c0,-4.418 -3.582,-8 -8,-8c-4.418,0 -8,3.582 -8,8v36c0,7.72 -6.28,14 -14,14c-7.72,0 -14,-6.28 -14,-14v-36c0,-7.72 6.28,-14 14,-14c4.418,0 8,-3.582 8,-8c0,-4.418 -3.582,-8 -8,-8c-16.542,0 -30,13.458 -30,30v36c0,16.542 13.458,30 30,30z"
											fill="#7e1e89"
										></path>
									</g>
								</g>
							</svg>
						</div>
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
