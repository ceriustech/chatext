// SubmitFile.js
import { LitElement, html, css } from 'lit';
import getEventHandler from '../../../utility/getEventHandler';

class OpenModal extends LitElement {
	openModalFunction() {
		// Emit custom event to signal that the modal should be opened
		this.dispatchEvent(
			new CustomEvent('open-modal', {
				bubbles: true,
				composed: true,
			})
		);
	}

	static styles = css`
		.open-modal-btn {
			background-color: #d1d5db;
			background-position: center;
			background-size: 50% 2px, 2px 50%; 
			background-repeat: no-repeat;
			border-radius: 25px;
			color: #7e1e89;
			font-size: 16px;
			padding: 1px 5px;
			border: none;
			margin-right: 10px;
			width: 25px;
			height: 25px;
			transition: transform 0.3s ease-in-out;
		}

		.open-modal-btn:hover {
			cursor: pointer;
			transform: scale(1.2);
		}

		.btn-plus-icon {
			position: relative;
			top: 1px;
		}
	`;

	render() {
		return html`
			<button class="open-modal-btn" @click=${this.openModalFunction}>
				<svg
					class="btn-plus-icon"
					xmlns="http://www.w3.org/2000/svg"
					height=".85em"
					viewBox="0 0 448 512"
					fill="#7e1e89"
				>
					<path
						d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
					/>
				</svg>
			</button>
		`;
	}
}

customElements.define('open-modal-button', OpenModal);

export default OpenModal;
