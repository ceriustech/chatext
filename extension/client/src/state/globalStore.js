import { eventEmitter } from './eventEmitter';

class GlobalStore {
	constructor() {
		this.uploadedFiles = [];
	}

	addFile(file) {
		// Limit the number of files to 6
		if (this.uploadedFiles.length >= 6) {
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
			console.log(
				'🚀 ~ file: globalStore.js:15 ~ GlobalStore ~ addFile ~ file:',
				file
			);
			eventEmitter.emitEvent('fileAdded', file);
		}
	}

	removeFile(file) {
		this.uploadedFiles = this.uploadedFiles.filter((f) => f !== file);
		eventEmitter.emitEvent('fileRemoved', file);
	}
}

export const globalStore = new GlobalStore();
