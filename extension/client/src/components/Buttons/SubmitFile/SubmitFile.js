import { LitElement, html, css } from 'lit';
import submitFiles from '../../../utility/submitFiles';

class SubmitFile extends LitElement {
	static styles = css`
		.submit-file-btn {
			background-color: #7e1e89;
			border: 1px solid #6c6f72;
			border-radius: 4px;
			color: #fff;
			cursor: pointer;
			padding: 5px 16px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 12px;
			font-weight: 600;
			margin: 10px 2px;
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
