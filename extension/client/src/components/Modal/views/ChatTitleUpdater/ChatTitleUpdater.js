import { LitElement, html, css } from 'lit';

class ChatTitleUpdater extends LitElement {
	static properties = {
		chatTitles: { type: Array },
	};

	constructor() {
		super();
		this.chatTitles = this.getChatTitles() || [];
	}

	getChatTitles() {
		// Assuming you have a way to access the chat titles from your markup
		const selector = '.relative.grow.overflow-hidden.whitespace-nowrap';
		const nodes = Array.from(document.querySelectorAll(selector));
		return nodes.map((node) => ({
			id: node.getAttribute('data-id'), // Assuming each node has a unique 'data-id' attribute
			title: node.textContent.trim(),
		}));
	}

	static styles = css`
		.chat-title {
			color: red;
		}
	`;

	render() {
		return html`
			<div id="chat-title-updater" class="chat-title-updater-container">
				${this.chatTitles.map(
					(chat) => html`
						<div class="chat-title" data-id="${chat.id}">${chat.title}</div>
					`
				)}
			</div>
		`;
	}
}

customElements.define('chat-title-updater-view', ChatTitleUpdater);

export default ChatTitleUpdater;
