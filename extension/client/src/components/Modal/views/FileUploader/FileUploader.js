import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import '../../../Buttons/SubmitFile';
import '../../../Buttons/RemoveFileIcon';
import '../../../FileIcon';
import '../../../Image/FileUploaderIcon';
import '../../../Image/TextIcons/CodeIcon';
import '../../../Image/TextIcons/DocumentIcon';
import '../../../Image/TextIcons/PdfDocumentIcon';
import '../../../Image/TextIcons/SpreadsheetIcon';
import '../../../Image/TextIcons/TextDocumentIcon';
import '../../../Image/TextIcons/UnknownDocumentIcon';
import getEventHandler from '../../../../utility/getEventHandler';
import { globalStore } from '../../../../state/globalStore';
import { eventEmitter } from '../../../../state/eventEmitter';
import { DOC_TYPES_MAP } from '../../../../docTypes';
import { FILE_ICON_DESCRIPTION } from '../../../../utility/utils';

class FileUploader extends LitElement {
	static properties = {
		isOpen: { type: Boolean },
		uploadedFiles: { type: Array },
		showFileName: { type: Boolean },
		currentFileName: { type: String },
		icon: { type: Object },
		iconDescriptonBorder: { type: String },
	};

	constructor() {
		super();
		this.isOpen = false;
		this.uploadedFiles = [];
		this.icon = null;
		this.iconDescriptonBorder = '#7e1e89';
		eventEmitter.on('fileAdded', this.handleFileChangeEvent);
		eventEmitter.on('fileRemoved', this.handleFileChangeEvent);
		eventEmitter.on('fileRemoved', this.setShowFileName);
	}

	setShowFileName = (value, forceHide = false) => {
		if (forceHide) {
			this.showFileName = false;
		} else {
			this.showFileName = value && this.uploadedFiles.length > 0;
		}
	};

	handleFileChangeEvent = (file) => {
		if (!file) return;
		this.uploadedFiles = [...globalStore.uploadedFiles];
		if (this.currentFileName === file.name) {
			this.setShowFileName(false);
			this.currentFileName = '';
		}
	};

	handleMouseEnter(fileName) {
		this.setShowFileName(this.uploadedFiles.length > 0);
		this.currentFileName = fileName;
		this.icon = this.getIconForExtension(this.getFileExtension(fileName));
	}

	handleMouseLeave() {
		this.setShowFileName();
		this.currentFileName = '';
	}

	getIconForExtension(extension) {
		extension = extension.toLowerCase();

		// Check if the extension is in devLangDocTypes
		for (const key in DOC_TYPES_MAP.devLangDocTypes) {
			if (DOC_TYPES_MAP.devLangDocTypes[key] === extension) {
				this.iconDescriptonBorder = FILE_ICON_DESCRIPTION.type.dev.color;

				return html`<code-icon></code-icon>`;
			}
		}

		// Check if the extension is in docTypes
		for (const key in DOC_TYPES_MAP.docTypes) {
			if (DOC_TYPES_MAP.docTypes[key] === extension) {
				if (extension === 'pdf') {
					this.iconDescriptonBorder =
						FILE_ICON_DESCRIPTION.type.doc.fileTypes.pdf.color;
					return html`<pdf-document-icon></pdf-document-icon>`;
				}

				if (extension === 'xlsx' || extension === 'csv') {
					this.iconDescriptonBorder =
						FILE_ICON_DESCRIPTION.type.doc.fileTypes.xlsx.color;

					return html`<spreadsheet-icon></spreadsheet-icon>`;
				}

				if (extension === 'txt') {
					this.iconDescriptonBorder =
						FILE_ICON_DESCRIPTION.type.doc.fileTypes.txt.color;

					return html`<text-document-icon></text-document-icon>`;
				}

				if (extension === 'doc' || extension === 'docx') {
					this.iconDescriptonBorder =
						FILE_ICON_DESCRIPTION.type.doc.fileTypes.doc.color;
					return html`<document-icon></document-icon>`;
				}
			}
		}

		// Check if the extension is in imageDotTypes
		// This logic is not needed because we are not allowing image uploads at the moment
		// but will be useful in the future
		// for (const key in DOC_TYPES_MAP.imageDotTypes) {
		// 	if (DOC_TYPES_MAP.imageDotTypes[key] === extension) {
		// 		return html`<image-icon></image-icon>`;
		// 	}
		// }

		// Handle any other cases here, or return a default icon
		return html`<unknown-document-icon></unknown-document-icon>`;
	}

	renderUploadedFiles(files) {
		return files.map((file) => {
			return html`
				<div
					class="file-upload-icon-wrapper"
					@mouseenter=${() => this.handleMouseEnter(file.name)}
					@mouseleave=${this.handleMouseLeave}
				>
					<div
						class="file-icon-remove-btn"
						@click=${() => {
							globalStore.removeFile(file.name);
							this.setShowFileName(false, true);
						}}
					>
						<remove-file-icon></remove-file-icon>
					</div>

					<file-icon
						.id=${file.name}
						.fileName=${file.name}
						.fileExtension=${this.getFileExtension(file.name)}
					></file-icon>
				</div>
			`;
		});
	}

	showFileIconDescription() {
		if (this.showFileName && this.uploadedFiles.length > 0) {
			return html`${this.icon}
				<p>${this.currentFileName}</p>`;
		}
	}

	getFileExtension(fileName) {
		return fileName.split('.').pop();
	}

	fileUploadNameInfoStyle(color) {
		if (this.showFileName && this.uploadedFiles.length > 0) {
			return {
				border: `1px solid ${color}`,
				borderRadius: '10px',
				padding: '8px 12px',
				maxWidth: '215px',
				display: 'flex',
				alignItems: 'center',
				gap: '7px',
			};
		}

		return {};
	}

	static styles = css`
		.file-upload-wrapper {
			border: 1px dashed #7e1e89;
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

		.file-upload-icon-container {
			display: flex;
			flex-direction: row;
			flex-flow: wrap;
			gap: 5px;
			align-items: flex-start;
			min-height: 72px;
			margin: 10px 0 25px;
		}

		.file-upload-icon-wrapper {
			margin-bottom: 7px;
			position: relative;
		}

		.file-icon-remove-btn {
			position: absolute;
			left: 32px;
			bottom: 42px;
			z-index: 1;
		}

		.file-upload-bottom {
			display: flex;
			align-items: center;
			font-size: 12px;
			justify-content: space-between;
			height: 50px;
		}

		.file-upload_name-info {
			border-radius: 10px;
			padding: 8px 12px;
			display: flex;
			align-items: center;
			gap: 7px;
		}

		.file-upload_name-info p {
			color: #6c6f72;
			font-size: 1rem;
			font-weight: 500;
			margin: 0;
			max-width: 200px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
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
					<file-uploader-icon></file-uploader-icon>
					<h2 class="file-upload-info-h">Drag file here</h2>
					<p class="file-upload-info-p">or, click to browse</p>
				</div>
				<div class="file-upload-icon-container">
					${this.renderUploadedFiles(this.uploadedFiles)}
				</div>
				<div class="file-upload-bottom">
					<div
						class="file-upload_name-info"
						style=${styleMap(
							this.fileUploadNameInfoStyle(this.iconDescriptonBorder)
						)}
					>
						${this.showFileIconDescription()}
					</div>
					<submit-file-button
						class="submit-file-btn-container"
					></submit-file-button>
				</div>
			</div>
		`;
	}
}

customElements.define('file-uploader-view', FileUploader);

export default FileUploader;
