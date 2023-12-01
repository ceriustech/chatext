import { LitElement, html, css } from 'lit';

class SpreadSheettIcon extends LitElement {
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
						fill="#158348"
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
								d="M14,4c-5.514,0 -10,4.486 -10,10v22c0,5.514 4.486,10 10,10h22c5.514,0 10,-4.486 10,-10v-22c0,-5.514 -4.486,-10 -10,-10zM12,15h26c0.553,0 1,0.447 1,1v18c0,0.553 -0.447,1 -1,1h-26c-0.553,0 -1,-0.447 -1,-1v-18c0,-0.553 0.447,-1 1,-1zM22,17v4h15v-4zM13,23v4h7v-4zM22,23v4h15v-4zM13,29v4h7v-4zM22,29v4h15v-4z"
							></path>
						</g>
					</g>
				</svg>
			</div>
		`;
	}
}

customElements.define('spreadsheet-icon', SpreadSheettIcon);

export default SpreadSheettIcon;
