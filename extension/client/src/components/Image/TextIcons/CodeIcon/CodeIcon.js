import { LitElement, html, css } from 'lit';

class CodeIcon extends LitElement {
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
						fill="#a40b58"
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
						<g transform="scale(2,2)">
							<path
								d="M86,6h-54c-7.2,0 -13,5.8 -13,13v90c0,7.2 5.8,13 13,13h64c7.2,0 13,-5.8 13,-13v-80c0,-6.1 -2.4,-11.9 -6.7,-16.3c-4.3,-4.4 -10.2,-6.7 -16.3,-6.7zM51,79v12c0,1.7 1.3,3 3,3c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3c-5,0 -9,-4 -9,-9v-12c0,-1.1 -0.9,-2 -2,-2c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3c1.1,0 2,-0.9 2,-2v-12c0,-5 4,-9 9,-9c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3c-1.7,0 -3,1.3 -3,3v12c0,1.9 -0.7,3.6 -1.8,5c1.1,1.4 1.8,3.1 1.8,5zM85,77c-1.1,0 -2,0.9 -2,2v12c0,5 -4,9 -9,9c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3c1.7,0 3,-1.3 3,-3v-12c0,-1.9 0.7,-3.6 1.8,-5c-1.1,-1.4 -1.8,-3.1 -1.8,-5v-12c0,-1.7 -1.3,-3 -3,-3c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3c5,0 9,4 9,9v12c0,1.1 0.9,2 2,2c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM96,26c-3.9,0 -7,-3.1 -7,-7v-6.7c3.4,0.6 6.5,2.2 9,4.7c2.5,2.5 4.1,5.6 4.7,9z"
							></path>
						</g>
					</g>
				</svg>
			</div>
		`;
	}
}

customElements.define('code-icon', CodeIcon);

export default CodeIcon;
