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
			color: black;
			text-decoration: none;
			cursor: pointer;
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
					<span class="close" @click=${this.closeModal}>&times;</span>
					<p>Some text in the Modal..</p>
				</div>
			</div>
		`;
	}
}

customElements.define('chatext-modal-container', Modal);

export default Modal;
