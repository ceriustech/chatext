import { LitElement, html, css } from 'lit';

class DocumentIcon extends LitElement {
	static styles = css`
		.logo-container {
			box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 3px 0px;
			border-radius: 25px;
			padding: 5px;
			display: flex;
		}
	`;

	render() {
		return html`
			<div class="logo-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					width="28px"
					height="28px"
				>
					<path fill="#90CAF9" d="M40 45L8 45 8 3 30 3 40 13z" />
					<path fill="#E1F5FE" d="M38.5 14L29 14 29 4.5z" />
					<path
						fill="#1976D2"
						d="M16 21H33V23H16zM16 25H29V27H16zM16 29H33V31H16zM16 33H29V35H16z"
					/>
				</svg>
			</div>
		`;
	}
}

customElements.define('document-icon', DocumentIcon);

export default DocumentIcon;
