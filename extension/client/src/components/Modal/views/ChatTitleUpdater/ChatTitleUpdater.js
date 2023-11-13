import { LitElement, html, css } from 'lit';
import '../../../Buttons/Save';
import saveChatTitles from '../../../../utility/saveChatTitles';
import changeChatTitle from '../../../../utility/changeChatTitles';

class ChatTitleUpdater extends LitElement {
	static properties = {
		chatTitles: { type: Array },
	};

	constructor() {
		super();
		this.chatTitles = this.chatTitles =
			JSON.parse(localStorage.getItem('chatTitles')) || this.getChatTitles();
	}

	getChatTitles() {
		const selector = '.relative.grow.overflow-hidden.whitespace-nowrap';
		const nodes = Array.from(document.querySelectorAll(selector));
		return nodes.map((node) => ({
			id: node.getAttribute('data-id'),
			title: node.textContent.trim(),
		}));
	}

	saveTitle(id, newTitle) {
		// Update the title in the component's state
		this.chatTitles = this.chatTitles.map((chat) =>
			chat.id === id ? { ...chat, title: newTitle } : chat
		);

		// Save the updated titles to local storage
		localStorage.setItem('chatTitles', JSON.stringify(this.chatTitles));
	}

	static styles = css`
		.chat-titles-border-wrapper {
			border: 1px solid gray;
			border-radius: 10px;
			height: 200px;
			overflow: hidden;
		}

		.chat-titles-wrapper {
			border-radius: 10px;
			height: 200px;
			padding: 12px;
			overflow: scroll;
		}

		.chat-titles-wrapper::-webkit-scrollbar-track {
			background: trasparent;
		}

		.chat-titles-wrapper::-webkit-scrollbar {
			width: 8px;
		}

		.chat-titles-wrapper::-webkit-scrollbar-thumb {
			background-color: #7e1e89;
			border-radius: 10px;
			border: 2px solid #fefefe;
			width: 3px;
		}

		.chat-title {
			color: #6c6f72;
			cursor: pointer;
			font-size: 12px;
		}

		.chat-title:hover {
			color: #7e1e89;
		}

		.chat-title p {
			font-size: 0.9rem;
			font-weight: 500;
			margin: 0px 0px 10px;
		}

		input[type='text'] {
			background-color: #fefefe;
			color: #6c6f72;
			padding: 6px 20px;
			margin: 8px 0;
			display: inline-block;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
			width: 100%;
		}

		.chat-title-btn-container {
			display: flex;
			flex-direction: row;
			justify-content: end;
		}
	`;

	render() {
		return html`
			<div id="chat-title-updater" class="chat-title-updater-container">
				<div class="chat-titles-border-wrapper">
					<div class="chat-titles-wrapper">
						${this.chatTitles.map(
							(chat, idx) => html`
								<div class="chat-title" data-id="${idx}">
									<p>${chat.title}</p>
								</div>
							`
						)}
					</div>
				</div>
				<div class="chat-title-updater-bottom">
					<div class="chat-title-updater-input-wrapper">
						<input
							type="text"
							class="chat-title-updater-input"
							placeholder="some title"
						/>
					</div>
					<div class="chat-title-btn-container">
						<save-button
							label="Update Chat Name"
							.handleClick=${changeChatTitle}
						></save-button>
						<save-button
							label="save"
							.handleClick=${saveChatTitles}
						></save-button>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('chat-title-updater-view', ChatTitleUpdater);

export default ChatTitleUpdater;
