import { LitElement, html, css } from 'lit';
import '../../../Buttons/SubmitFile';
import '../../../Buttons/RemoveFileIcon';
import '../../../FileIcon';
import getEventHandler from '../../../../utility/getEventHandler';
import { globalStore } from '../../../../state/globalStore';
import { eventEmitter } from '../../../../state/eventEmitter';

class FileUploader extends LitElement {
	static properties = {
		isOpen: { type: Boolean },
		uploadedFiles: { type: Array },
	};

	constructor() {
		super();
		this.isOpen = false;
		this.uploadedFiles = [];
		this.testArray = [1, 2, 3, 4, 5, 6];
		eventEmitter.on('fileAdded', this.handleFileChangeEvent);
		eventEmitter.on('fileRemoved', this.handleFileChangeEvent);
	}

	handleFileChangeEvent = (file) => {
		if (!file) return;
		console.log('🚀 ~ file: FileUploader.js:24 ~ FileUploader ~ file:', file);

		eventEmitter.logger();

		this.uploadedFiles = [...globalStore.uploadedFiles];
		console.log(
			'🚀 ~ file: FileUploader.js:42 ~ handleFileAddedEvent ~ this.uploadedFiles:',
			this.uploadedFiles
		);
	};

	renderUploadedFiles(files) {
		console.log(
			'🚀 ~ file: FileUploader.js:41 ~ FileUploader ~ renderUploadedFiles ~ files:',
			files
		);

		return files.map(
			(file, idx) =>
				html`
					<div>
						<div class="file-icon-remove-btn" @click=${globalStore.removeFile}>
							<remove-file-icon></remove-file-icon>
						</div>
						<file-icon
							.id=${file.name}
							.fileName=${file.name}
							.fileExtension=${this.getFileExtension(file.name)}
							.key=${idx}
						></file-icon>
					</div>
				`
		);
	}

	getFileExtension(fileName) {
		return fileName.split('.').pop();
	}

	static styles = css`
		.file-upload-wrapper {
			border: 2px dashed #7e1e89;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 12px;
		}

		.upload-icon {
			margin: 25px 0 15px;
		}

		.file-upload-info-h {
			color: #363e4b;
			margin: 0;
		}

		.file-upload-info-p {
			color: #6c6f72;
			cursor: pointer;
			font-size: 1.025rem;
			margin-top: 0;
		}

		.file-upload-info-p:hover {
			color: #7e1e89;
		}

		.file-upload-icon-wrapper {
			display: flex;
			flex-direction: row;
			gap: 5px;
			align-items: flex-start;
			margin: 10px 0 25px;
			position: relative;
		}

		.file-icon-remove-btn {
			position: absolute;
			left: 32px;
			bottom: 42px;
			z-index: 1;
		}

		.submit-file-btn-container {
			display: flex;
			flex-direction: row;
			justify-content: end;
		}
	`;

	render() {
		return html`
			<div id="file-uploader" class="file-uploader-container">
				<div
					class="file-upload-wrapper"
					@click=${getEventHandler('click')}
					@drop=${getEventHandler('drop')}
				>
					<div class="upload-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0,0,256,256"
							width="64px"
							height="64px"
							fill-rule="nonzero"
							fill="none"
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
								<g transform="scale(0.5,0.5)">
									<path
										d="M476,112h-142l26,32h-48v160h-112v-160h-48l26,-32h-142c-5.30482,-0.00159 -10.39282,2.10503 -14.14389,5.85611c-3.75107,3.75107 -5.8577,8.83908 -5.85611,14.14389v252h480v-252c0.00159,-5.30482 -2.10503,-10.39282 -5.85611,-14.14389c-3.75107,-3.75107 -8.83908,-5.8577 -14.14389,-5.85611zM312,352h-112v-24h112z"
										fill-opacity="0.25098"
										fill="#7e1e89"
									></path>
									<path
										d="M320,472h-128l16,-40h96z"
										fill-opacity="0.25098"
										fill="#7e1e89"
									></path>
									<g fill="#7e1e89">
										<path
											d="M476,104h-138.19l-75.6,-93.04c-1.51786,-1.87249 -3.79958,-2.96012 -6.21,-2.96012c-2.41042,0 -4.69214,1.08763 -6.21,2.96012l-75.6,93.04h-138.19c-15.45689,0.01708 -27.98292,12.54311 -28,28v280c0.01708,15.45689 12.54311,27.98292 28,28h160.18l-9.6,24h-42.58c-4.41828,0 -8,3.58172 -8,8v24c0,4.41828 3.58172,8 8,8h224c4.41828,0 8,-3.58172 8,-8v-24c0,-4.41828 -3.58172,-8 -8,-8h-42.58l-9.6,-24h160.18c15.45689,-0.01708 27.98292,-12.54311 28,-28v-280c-0.01708,-15.45689 -12.54311,-27.98292 -28,-28zM184.17,117.09h0.01l71.82,-88.4l71.82,88.4h0.01l15.36,18.91h-31.19c-4.41828,0 -8,3.58172 -8,8v152h-96v-152c0,-4.41828 -3.58172,-8 -8,-8h-31.19zM360,480v8h-208v-8zM203.82,464l9.6,-24h85.16l9.6,24zM488,412c-0.00551,6.62513 -5.37487,11.99449 -12,12h-440c-6.62513,-0.00551 -11.99449,-5.37487 -12,-12v-20h464zM488,376h-464v-244c0.00551,-6.62513 5.37487,-11.99449 12,-12h125.19l-15.4,18.96c-1.94329,2.39547 -2.33627,5.69478 -1.01002,8.47968c1.32625,2.78491 4.13544,4.55925 7.22002,4.56032h40v152c0,4.41828 3.58172,8 8,8h112c4.41828,0 8,-3.58172 8,-8v-152h40c3.08458,-0.00106 5.89377,-1.77541 7.22002,-4.56032c1.32625,-2.78491 0.93327,-6.08421 -1.01002,-8.47968l-15.4,-18.96h125.19c6.62513,0.00551 11.99449,5.37487 12,12z"
										></path>
										<path
											d="M200,360h112c4.41828,0 8,-3.58172 8,-8v-24c0,-4.41828 -3.58172,-8 -8,-8h-112c-4.41828,0 -8,3.58172 -8,8v24c0,4.41828 3.58172,8 8,8zM208,336h96v8h-96z"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<h2 class="file-upload-info-h">Drag file here</h2>
					<p class="file-upload-info-p">or, click to browse</p>
				</div>
				<div class="file-upload-icon-wrapper">
					${this.renderUploadedFiles(this.uploadedFiles)}
				</div>
				<submit-file-button
					class="submit-file-btn-container"
				></submit-file-button>
			</div>
		`;
	}
}

customElements.define('file-uploader-view', FileUploader);

export default FileUploader;
