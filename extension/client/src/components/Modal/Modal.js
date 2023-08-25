import { LitElement, html, css, property } from 'lit';

class Modal extends LitElement {
	static properties = {
		isOpen: { type: Boolean },
	};

	constructor() {
		super();
		this.isOpen = false;
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
			background-color: rgba(0, 0, 0, 0.4);
		}

		.modal-content {
			background-color: #fefefe;
			margin: 15% auto;
			padding: 20px;
			border: 1px solid #888;
			width: 80%;
		}

		.close {
			color: #aaa;
			float: right;
			font-size: 28px;
			font-weight: bold;
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
					<span class="close">&times;</span>
					<p>Some text in the Modal..</p>
				</div>
			</div>
		`;
	}
}

customElements.define('chatext-modal-container', Modal);

export default Modal;
