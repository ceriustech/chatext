import { html, component } from 'haunted';
import handleClick from '../../../utility/handleClick';

function SubmitFile() {
	return html`
		<style>
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
		</style>
		<button class="submit-file-btn" @click=${() => handleClick()}>
			Submit File To Chat
		</button>
	`;
}

customElements.define('submit-file-button', component(SubmitFile));

export default SubmitFile;
