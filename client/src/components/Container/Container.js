import { LitElement, html, css } from 'lit';
import '../Buttons/SubmitFile/SubmitFile';
import '../ProgressBar/ProgressBar.js';

class Container extends LitElement {
	static styles = css`
		@media screen and (max-width: 768px) {
			.container {
				padding: 0 12px;
			}
		}
	`;

	render() {
		return html`
			<div class="container">
				<submit-file-button></submit-file-button>
				<progress-bar></progress-bar>
			</div>
		`;
	}
}

customElements.define('app-container', Container);

export default Container;
