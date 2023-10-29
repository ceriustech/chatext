class EventEmitter {
	constructor() {
		this.eventListeners = {};
	}

	logger() {
		console.log(
			'🚀 ~ file: eventEmitter.js:12 ~ EventEmitter ~ this.eventListeners',
			this.eventListeners
		);
	}

	on(event, callback) {
		if (!this.eventListeners[event]) this.eventListeners[event] = [];
		this.eventListeners[event].push(callback);
	}

	emit(event, data) {
		(this.eventListeners[event] || []).forEach((cb) => cb(data));
	}
}

export const eventEmitter = new EventEmitter();
