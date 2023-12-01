import { eventEmitter } from './eventEmitter';
import { MAX_FILES } from '../utility/utils';

class GlobalStore {
	constructor() {
		this.uploadedFiles = [];
	}

	addFile(file) {
		if (!file) return;
		// Limit the number of files to 6
		if (this.uploadedFiles.length >= MAX_FILES) {
			eventEmitter.emitEvent('fileLimitReached', {
				message: 'Maximum of 6 files can be uploaded.',
			});
			return;
		}
		// Check if the file with the same name already exists in the uploadedFiles array
		const isFileAlreadyAdded = this.uploadedFiles.some(
			(existingFile) => existingFile.name === file.name
		);

		// If the file doesn't exist, add it to the array and emit an event
		if (!isFileAlreadyAdded) {
			this.uploadedFiles.push(file);
			eventEmitter.emit('fileAdded', file);
			console.log(
				'🚀 ~ file: globalStore.js:26 ~ GlobalStore ~ addFile ~ uploadedFiles:',
				this.uploadedFiles
			);
		}
	}

	removeFile(fileName) {
		if (!fileName) return;

		this.uploadedFiles = this.uploadedFiles.filter(
			(file) => file.name !== fileName
		);
		eventEmitter.emit('fileRemoved', fileName);
	}

	removeAllFiles() {
		while (this.uploadedFiles.length > 0) {
			const fileName = this.uploadedFiles[0].name;
			this.removeFile(fileName);
		}
	}
}

export const globalStore = new GlobalStore();
