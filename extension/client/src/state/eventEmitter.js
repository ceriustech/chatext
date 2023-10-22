class EventEmitter {
	constructor() {
		this.eventListeners = {};
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
