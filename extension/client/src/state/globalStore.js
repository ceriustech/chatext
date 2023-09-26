import { eventEmitter } from '../utility/eventEmitter';

class GlobalStore {
	constructor() {
		this.uploadedFiles = [];
	}

	addFile(file) {
		this.uploadedFiles.push(file);
		eventEmitter.emitEvent('fileAdded', file);
	}

	removeFile(file) {
		this.uploadedFiles = this.uploadedFiles.filter((f) => f !== file);
		eventEmitter.emitEvent('fileRemoved', file);
	}
}

export const globalStore = new GlobalStore();
