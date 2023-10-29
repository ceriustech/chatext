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
			if (this.uploadedFiles.length > 1) {
				console.log('Multiple files added');
			} else {
				console.log('Single file added');
			}
			console.log(
				'🚀 ~ file: globalStore.js:24 ~ GlobalStore ~ addFile ~ uploadedFiles:',
				this.uploadedFiles
			);
			eventEmitter.emit('fileAdded', file);
		}
	}

	removeFile(file) {
		this.uploadedFiles = this.uploadedFiles.filter((f) => f !== file);
		eventEmitter.emit('fileRemoved', file);
	}
}

export const globalStore = new GlobalStore();
