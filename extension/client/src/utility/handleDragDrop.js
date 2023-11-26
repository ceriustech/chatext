import stageFilesForUpload from './stageFilesForUpload';

async function handleDragDrop(event) {
	// ... (no changes here)
	event.preventDefault();
	const files = event.dataTransfer.files;

	if (!files.length) {
		console.log('No file selected.');
		return;
	}

	stageFilesForUpload(files);
}

export default handleDragDrop;
