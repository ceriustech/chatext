import { LitElement, html, css } from 'lit';

class UnkownDocumentIcon extends LitElement {
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
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0,0,256,256"
					width="28px"
					height="28px"
				>
					<g
						fill="#000000"
						fill-rule="nonzero"
						stroke="none"
						stroke-width="1"
						stroke-linecap="butt"
						stroke-linejoin="miter"
						stroke-miterlimit="10"
						stroke-dasharray=""
						stroke-dashoffset="0"
						font-family="none"
						font-weight="none"
						font-size="none"
						text-anchor="none"
						style="mix-blend-mode: normal"
					>
						<g transform="scale(5.12,5.12)">
							<path
								d="M7,2v46h36v-33.40625l-0.28125,-0.3125l-12,-12l-0.3125,-0.28125zM9,4h20v12h12v30h-32zM31,5.4375l8.5625,8.5625h-8.5625z"
							></path>
						</g>
					</g>
				</svg>
			</div>
		`;
	}
}

customElements.define('unknown-document-icon', UnkownDocumentIcon);

export default UnkownDocumentIcon;
