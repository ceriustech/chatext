import { LitElement, html, css } from 'lit';

class RemoveFileIcon extends LitElement {
	static styles = css`
		.remove-file-btn {
			background: transparent;
			border: none;
		}

		.remove-file-btn:hover {
			cursor: pointer;
		}
	`;

	render() {
		return html`
			<button class="remove-file-btn">
				<?xml version="1.0"?><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 30 30"
					width="20px"
					height="20px"
				>
					<path
						d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.707,18.293 c0.391,0.391,0.391,1.023,0,1.414C19.512,19.902,19.256,20,19,20s-0.512-0.098-0.707-0.293L15,16.414l-3.293,3.293 C11.512,19.902,11.256,20,11,20s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L13.586,15l-3.293-3.293 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L15,13.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414 L16.414,15L19.707,18.293z"
					/>
				</svg>
			</button>
		`;
	}
}

customElements.define('remove-file-icon', RemoveFileIcon);

export default RemoveFileIcon;
