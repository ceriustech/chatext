import { LitElement, html, css } from 'lit';
import '../Buttons/SubmitFile/SubmitFile';

class Container extends LitElement {
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
				<submit-file-button></submit-file-button>
			</div>
		`;
	}
}

customElements.define('app-container', Container);

export default Container;
