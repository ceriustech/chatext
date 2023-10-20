class EventEmitter {
	constructor() {
		this.eventListeners = {};
	}

	addEventListener(event, callback) {
		if (!this.eventListeners[event]) this.eventListeners[event] = [];
		this.eventListeners[event].push(callback);
	}

	emitEvent(event, data) {
		(this.eventListeners[event] || []).forEach((cb) => cb(data));
	}
}

export const eventEmitter = new EventEmitter();
