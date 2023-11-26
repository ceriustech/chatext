import stageFilesForUpload from './stageFilesForUpload';
import { DOC_TYPES } from '../docTypes';

async function handleClick() {
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.accept = DOC_TYPES;
	fileInput.multiple = true; // Allow multiple files

	fileInput.addEventListener('change', async (event) => {
		const files = event.target.files;

		if (!files.length) {
			console.log('No file selected.');
			return;
		}

		console.log(
			'🚀 ~ file: handleClick.js:66 ~ fileInput.addEventListener ~ files:',
			files
		);

		stageFilesForUpload(files);
	});

	fileInput.click();
}

export default handleClick;
