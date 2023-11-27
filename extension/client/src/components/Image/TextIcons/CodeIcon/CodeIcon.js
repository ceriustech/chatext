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
						fill="#7e1e89"
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
								d="M32,122h64c7.2,0 13,-5.8 13,-13v-80c0,-6.1 -2.4,-11.9 -6.7,-16.3c-4.3,-4.4 -10.2,-6.7 -16.3,-6.7h-54c-7.2,0 -13,5.8 -13,13v90c0,7.2 5.8,13 13,13zM98,17c2.5,2.5 4.1,5.6 4.7,9h-6.7c-3.9,0 -7,-3.1 -7,-7v-6.7c3.4,0.6 6.5,2.2 9,4.7zM79.1,60.2c-1.2,-1.1 -1.3,-3 -0.2,-4.2c1.1,-1.2 3,-1.3 4.2,-0.2l12.1,11.1c0.6,0.6 1,1.4 1,2.2c0,0.8 -0.4,1.7 -1,2.2l-12.1,11c-0.6,0.5 -1.3,0.8 -2,0.8c-0.8,0 -1.6,-0.3 -2.2,-1c-1.1,-1.2 -1,-3.1 0.2,-4.2l9.6,-8.8zM52.9,90.1l16.5,-44.4c0.6,-1.6 2.3,-2.3 3.9,-1.8c1.6,0.6 2.3,2.3 1.8,3.9l-16.6,44.4c-0.5,1.3 -1.8,2.1 -3.1,1.9c-0.3,0 -0.5,-0.1 -0.8,-0.2c-1.5,-0.5 -2.3,-2.2 -1.7,-3.8zM32.8,66.8l12.1,-11.1c1.2,-1.1 3.1,-1 4.2,0.2c1.1,1.2 1,3.1 -0.2,4.2l-9.6,8.9l9.6,8.8c1.2,1.1 1.3,3 0.2,4.2c-0.6,0.7 -1.4,1 -2.2,1c-0.7,0 -1.4,-0.2 -2,-0.8l-12.1,-11c-0.6,-0.6 -1,-1.4 -1,-2.2c0,-0.8 0.4,-1.7 1,-2.2z"
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
