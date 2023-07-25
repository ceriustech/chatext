// SubmitFile.js
import { LitElement, html, css } from 'lit';
import handleClick from '../../../utility/handleClick';

class SubmitFile extends LitElement {
	static styles = css`
		.submit-file-btn {
			background-color: #d1d5db;
			background-position: center;
			background-size: 50% 2px, 2px 50%; /*thickness = 2px, length = 50% (25px)*/
			background-repeat: no-repeat;
			border-radius: 25px;
			color: #7e1e89;
			font-size: 16px;
			padding: 1px 5px;
			border: none;
			margin-right: 10px;
			width: 25px;
			height: 25px;
			transition: transform 0.3s ease-in-out;
		}

		.submit-file-btn:hover {
			cursor: pointer;
			transform: scale(1.2);
		}
	`;

	render() {
		return html`
			<button class="submit-file-btn" @click=${() => handleClick()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height=".75em"
					viewBox="0 0 448 512"
					fill="#7e1e89"
				>
					<path
						d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
					/>
				</svg>
			</button>
		`;
	}
}

customElements.define('submit-file-button', SubmitFile);

export default SubmitFile;
