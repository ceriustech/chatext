import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('progress-bar')
class ProgressBar extends LitElement {
	static styles = css`
		.progress-bar-container {
			width: 90%;
			height: 6px;
			border: 1px solid #000;
			margin-bottom: 10px;
		}

		.progress-bar {
			width: 0%;
			height: 100%;
		}
	`;

	render() {
		return html`
			<div class="progress-bar-container">
				<div class="progress-bar"></div>
			</div>
		`;
	}
}

export default ProgressBar;
