// SubmitFile.js
import { LitElement, html, css } from 'lit';
import submitFiles from '../../../utility/submitFiles';

class SubmitFile extends LitElement {
	static styles = css`
		.submit-file-btn {
			background-color: #7e1e89;
			border: none;
			border-radius: 10px;
			color: white;
			padding: 10px 24px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 12px;
			margin: 10px 2px;
			cursor: pointer;
		}
	`;

	render() {
		return html`
			<button class="submit-file-btn" @click=${submitFiles}>Submit</button>
		`;
	}
}

customElements.define('submit-file-button', SubmitFile);

export default SubmitFile;
