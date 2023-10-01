import { LitElement, html, css } from 'lit';
import submitFiles from '../../../utility/submitFiles';

class SubmitFile extends LitElement {
	static styles = css`
		.submit-file-btn {
			background-color: #fff;
			border: 1px solid #7e1e89;
			border-radius: 10px;
			padding: 5px 16px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 12px;
			margin: 10px 2px;
			cursor: pointer;
		}

		p {
			color: #7e1e89;
			font-size: 0.95rem;
			margin: 0;
		}
	`;

	render() {
		return html`
			<button class="submit-file-btn" @click=${submitFiles}>
				<p>Submit</p>
			</button>
		`;
	}
}

customElements.define('submit-file-button', SubmitFile);

export default SubmitFile;
