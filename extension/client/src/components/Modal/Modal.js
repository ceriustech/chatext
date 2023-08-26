import { LitElement, html, css, property } from 'lit';

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

		.file-upload-wrapper {
			border: 1px dashed #7e1e89;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 12px;
		}

		.upload-icon {
			margin: 25px 0 15px;
		}

		.file-upload-info-h {
			color: #363e4b;
			margin: 0;
		}

		.file-upload-info-p {
			color: #999da5;
			font-size: 1.025rem;
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
					<span class="close" @click=${this.closeModal}>&times;</span>
					<div class="file-upload-wrapper">
						<div class="upload-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0,0,256,256"
								width="64px"
								height="64px"
								fill-rule="nonzero"
								fill="none"
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
									<g transform="scale(0.5,0.5)">
										<path
											d="M476,112h-142l26,32h-48v160h-112v-160h-48l26,-32h-142c-5.30482,-0.00159 -10.39282,2.10503 -14.14389,5.85611c-3.75107,3.75107 -5.8577,8.83908 -5.85611,14.14389v252h480v-252c0.00159,-5.30482 -2.10503,-10.39282 -5.85611,-14.14389c-3.75107,-3.75107 -8.83908,-5.8577 -14.14389,-5.85611zM312,352h-112v-24h112z"
											fill-opacity="0.25098"
											fill="#7e1e89"
										></path>
										<path
											d="M320,472h-128l16,-40h96z"
											fill-opacity="0.25098"
											fill="#7e1e89"
										></path>
										<g fill="#7e1e89">
											<path
												d="M476,104h-138.19l-75.6,-93.04c-1.51786,-1.87249 -3.79958,-2.96012 -6.21,-2.96012c-2.41042,0 -4.69214,1.08763 -6.21,2.96012l-75.6,93.04h-138.19c-15.45689,0.01708 -27.98292,12.54311 -28,28v280c0.01708,15.45689 12.54311,27.98292 28,28h160.18l-9.6,24h-42.58c-4.41828,0 -8,3.58172 -8,8v24c0,4.41828 3.58172,8 8,8h224c4.41828,0 8,-3.58172 8,-8v-24c0,-4.41828 -3.58172,-8 -8,-8h-42.58l-9.6,-24h160.18c15.45689,-0.01708 27.98292,-12.54311 28,-28v-280c-0.01708,-15.45689 -12.54311,-27.98292 -28,-28zM184.17,117.09h0.01l71.82,-88.4l71.82,88.4h0.01l15.36,18.91h-31.19c-4.41828,0 -8,3.58172 -8,8v152h-96v-152c0,-4.41828 -3.58172,-8 -8,-8h-31.19zM360,480v8h-208v-8zM203.82,464l9.6,-24h85.16l9.6,24zM488,412c-0.00551,6.62513 -5.37487,11.99449 -12,12h-440c-6.62513,-0.00551 -11.99449,-5.37487 -12,-12v-20h464zM488,376h-464v-244c0.00551,-6.62513 5.37487,-11.99449 12,-12h125.19l-15.4,18.96c-1.94329,2.39547 -2.33627,5.69478 -1.01002,8.47968c1.32625,2.78491 4.13544,4.55925 7.22002,4.56032h40v152c0,4.41828 3.58172,8 8,8h112c4.41828,0 8,-3.58172 8,-8v-152h40c3.08458,-0.00106 5.89377,-1.77541 7.22002,-4.56032c1.32625,-2.78491 0.93327,-6.08421 -1.01002,-8.47968l-15.4,-18.96h125.19c6.62513,0.00551 11.99449,5.37487 12,12z"
											></path>
											<path
												d="M200,360h112c4.41828,0 8,-3.58172 8,-8v-24c0,-4.41828 -3.58172,-8 -8,-8h-112c-4.41828,0 -8,3.58172 -8,8v24c0,4.41828 3.58172,8 8,8zM208,336h96v8h-96z"
											></path>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<h2 class="file-upload-info-h">Drag file here</h2>
						<p class="file-upload-info-p">or, click to browse</p>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('chatext-modal-container', Modal);

export default Modal;