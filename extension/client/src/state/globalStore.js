import { eventEmitter } from './eventEmitter';

class GlobalStore {
	constructor() {
		this.uploadedFiles = [];
	}

	addFile(file) {
		if (!file) return;
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
			eventEmitter.emit('fileAdded', file);
		}
	}

	removeFile(fileName) {
		if (!fileName) return;

		this.uploadedFiles = this.uploadedFiles.filter(
			(file) => file.name !== fileName
		);
		eventEmitter.emit('fileRemoved', fileName);
	}
}

export const globalStore = new GlobalStore();
