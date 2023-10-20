import { LitElement, html, css } from 'lit';
import submitFiles from '../../../utility/submitFiles';

class SubmitFile extends LitElement {
	static styles = css`
		.submit-file-btn {
			background-color: #fff;
			border: 1px solid #6c6f72;
			border-radius: 10px;
			padding: 5px 16px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 12px;
			font-weight: 600;
			margin: 10px 2px;
			cursor: pointer;
			color: #000;
		}

		.submit-file-btn:hover {
			border: 1px solid #7e1e89;
		}

		p {
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
