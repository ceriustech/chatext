import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import handleClick from '../../../utility/handleClick';

@customElement('submit-file-button')
class SubmitFile extends LitElement {
	static styles = css`
		.submit-file-btn {
			background-color: #d1d5db;
			color: #7e1e89;
			font-weight: 700;
			padding: 5px;
			border: none;
			border-radius: 5px;
			margin: 0 auto 10px;
			width: 150px;
		}

		.submit-file-button:hover {
			cursor: pointer;
		}
	`;

	render() {
		return html`
			<button class="submit-file-btn" @click=${() => handleClick()}>
				Submit File To Chat
			</button>
		`;
	}
}

export default SubmitFile;
