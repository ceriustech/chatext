import { globalStore } from '../state/globalStore';
import { MAX_FILES } from './utils';

async function stageFilesForUpload(files) {
	aa;
	if (files.length > MAX_FILES) {
		console.log(`You can't upload more than ${MAX_FILES} files.`);
		return;
	}

	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		globalStore.addFile(file);
	}
}

export default stageFilesForUpload;
