import { LitElement, html, css } from 'lit';
import '../Buttons/RemoveFileIcon';
import removeFile from '../../utility/removeFile';

class FileIcon extends LitElement {
	static properties = {
		id: { type: String },
		fileName: { type: String },
		fileExtension: { type: String },
		key: { type: Number },
	};

	static styles = css`
		.file-icon-container {
			font-size: 12px;
			width: 56px;
			display: flex;
			flex-direction: column;
			align-items: end;
			position: relative;
		}

		.file-icon-wrapper {
			width: 100%;
			position: relative;
		}

		.file-icon-remove-btn {
			position: absolute;
			left: 37px;
			bottom: 41px;
		}

		.file-icon-info {
			color: #999da5;
			cursor: pointer;
			font-size: 0.9rem;
			margin: 0px;
			line-height: 0;
			padding-right: 5px;
		}

		.file-icon-info_hover-text {
			display: none;
			position: absolute;
			top: 58px;
			left: 4px;
			background-color: #7e1e89;
			border-radius: 10px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			z-index: 1;
			padding: 5px 7px;
			color: #fff;
			line-height: 1.5;
			text-align: center;
		}

		.file-icon-info:hover .file-icon-info_hover-text {
			display: block;
		}
	`;

	render() {
		return html`
			<div class="file-icon-container">
				<div id=${this.id} class="file-icon-wrapper">
					<div class="file-icon-remove-btn" @click=${removeFile}>
						<remove-file-icon></remove-file-icon>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0,0,256,256"
						width="60px"
						height="60px"
					>
						<g
							fill="none"
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
							<g transform="scale(4,4)">
								<path
									d="M23.24,4.94h28.76c1.65685,0 3,1.34315 3,3v48c0,1.65685 -1.34315,3 -3,3h-38c-1.65685,0 -3,-1.34315 -3,-3v-38.76c0.0007,-0.79538 0.31723,-1.55793 0.88,-2.12l9.24,-9.24c0.56207,-0.56277 1.32462,-0.8793 2.12,-0.88z"
									fill="#faefde"
								></path>
								<path
									d="M11,59l-0.15,-9.46l43.49,-43.48l0.66,22.94l-30,30zM10.85,39.15l34.21,-34.21l5.75,0.25l-39.81,39.81zM10.85,33.15l28.15,-28.15h3l-31.15,31.15z"
									fill="#fff7f0"
								></path>
								<path
									d="M45.5,13l1.24,2.26l2.26,1.24l-2.26,1.24l-1.24,2.26l-1.24,-2.26l-2.26,-1.24l2.26,-1.24zM30.42,11l0.85,1.56l1.57,0.86l-1.57,0.85l-0.85,1.57l-0.86,-1.57l-1.56,-0.85l1.56,-0.86zM16.65,42l0.58,1.06l1.07,0.59l-1.07,0.58l-0.58,1.07l-0.58,-1.07l-1.07,-0.58l1.07,-0.59z"
									fill="#ffffff"
								></path>
								<path d="M23,5v12h-12z" fill="#bbdef9"></path>
								<path
									d="M53,4h-29.34c-1.32699,-0.00237 -2.60049,0.52286 -3.54,1.46l-8.66,8.66c-0.93714,0.93951 -1.46237,2.21301 -1.46,3.54v39.34c0,1.65685 1.34315,3 3,3h40c1.65685,0 3,-1.34315 3,-3v-50c0,-1.65685 -1.34315,-3 -3,-3zM21.54,6.88c0.14032,-0.14164 0.29442,-0.26893 0.46,-0.38v8.5c0,0.55228 -0.44772,1 -1,1h-8.5c0.11107,-0.16558 0.23836,-0.31968 0.38,-0.46zM54,57c0,0.55228 -0.44772,1 -1,1h-40c-0.55228,0 -1,-0.44772 -1,-1v-39h9c1.65685,0 3,-1.34315 3,-3v-9h29c0.55228,0 1,0.44772 1,1z"
									fill="#8d6c9f"
								></path>
								<path
									d="M45,22h-4c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1h4c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM21,24h16c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-16c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1zM21,28h20c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1h-20c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1zM33,36h-12c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1h12c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM43,32h-22c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1h22c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM15,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM20,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM25,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM30,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM35,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM40,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM45,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1zM50,50c-0.55228,0 -1,0.44772 -1,1v2c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1v-2c0,-0.55228 -0.44772,-1 -1,-1z"
									fill="#8d6c9f"
								></path>
							</g>
						</g>
					</svg>
				</div>
				<p class="file-icon-info">
					<span class="file-icon-info_hover-text">${this.fileName}</span>.${this
						.fileExtension}
				</p>
			</div>
		`;
	}
}

customElements.define('file-icon', FileIcon);

export default FileIcon;
