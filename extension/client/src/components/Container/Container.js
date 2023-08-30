import { LitElement, html, css } from 'lit';
import '../Buttons/OpenModal';
import '../Modal';

class Container extends LitElement {
	openModal() {
		const modal = this.shadowRoot.querySelector('chatext-modal-container');
		if (modal) {
			modal.isOpen = true;
		}
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('open-modal', this.openModal);
	}

	disconnectedCallback() {
		this.removeEventListener('open-modal', this.openModal);
		super.disconnectedCallback();
	}
	static styles = css`
		.container {
			position: absolute;
			bottom: 15px;
		}

		@media screen and (max-width: 768px) {
			.container {
				padding: 0 12px;
				position: absolute;
				bottom: 10px;
			}
		}
	`;

	render() {
		return html`
			<div class="container">
				<chatext-modal-container></chatext-modal-container>
				<open-modal-button></open-modal-button>
			</div>
		`;
	}
}

customElements.define('app-container', Container);

export default Container;
