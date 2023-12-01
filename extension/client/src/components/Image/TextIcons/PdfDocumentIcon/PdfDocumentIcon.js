import { LitElement, html, css } from 'lit';

class PdfDocumentIcon extends LitElement {
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
					<path fill="#ff5722" d="M40,45H8V3h22l10,10V45z" />
					<path fill="#fbe9e7" d="M38.5,14H29V4.5L38.5,14z" />
					<path
						fill="#fff"
						d="M16,39c-0.4,0-0.7-0.1-1-0.2c-1.1-0.6-1.2-1.5-1-2.2c0.4-1.2,2.6-2.7,5.5-4c0,0,0,0,0,0 c1.3-2.4,2.3-4.9,2.9-7c-1-1.9-1.5-3.7-1.5-5c0-0.7,0.2-1.3,0.5-1.8c0.4-0.5,1-0.8,1.8-0.8c0.9,0,1.6,0.5,1.9,1.4 c0.5,1.2,0.2,3.4-0.5,5.9c1,1.7,2.2,3.3,3.5,4.5c1.9-0.4,3.6-0.6,4.7-0.4c1.9,0.3,2.2,1.6,2.2,2.1c0,2.1-2.2,2.1-3,2.1 c-1.5,0-3-0.6-4.3-1.7c0,0,0,0,0,0c-2.4,0.6-4.8,1.4-6.7,2.3c-1,1.7-2,3.1-2.9,3.9C17.2,38.8,16.5,39,16,39z M17.2,36.1 c-0.5,0.3-0.9,0.6-1.1,0.9C16.3,36.9,16.7,36.7,17.2,36.1z M30.8,31.4c0.4,0.1,0.8,0.2,1.2,0.2c0.6,0,0.9-0.1,1-0.1l0,0 C32.9,31.4,32.2,31.2,30.8,31.4z M23.8,27.8c-0.4,1.2-1,2.5-1.5,3.7c1.2-0.4,2.4-0.8,3.6-1.1C25.1,29.6,24.4,28.7,23.8,27.8z M23.2,20c-0.1,0-0.1,0-0.1,0c-0.1,0.1-0.2,0.8,0.2,2.3C23.4,21.1,23.4,20.2,23.2,20z"
					/>
				</svg>
			</div>
		`;
	}
}

customElements.define('pdf-document-icon', PdfDocumentIcon);

export default PdfDocumentIcon;
