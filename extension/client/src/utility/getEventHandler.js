import handleClick from './handleClick';
import handleDragDrop from './handleDragDrop';

function getEventHandler(eventType) {
	switch (eventType) {
		case 'click':
			return handleClick;
		case 'drop':
			return handleDragDrop;
		default:
			throw new Error(`Unsupported event type: ${eventType}`);
	}
}

export default getEventHandler;
