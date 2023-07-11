import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './SubmitFile.js';
import './ProgressBar.js';

@customElement('app-container')
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

export default Container;
