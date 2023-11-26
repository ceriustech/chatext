import { LitElement, html, css } from 'lit';
import '../../../Buttons/Button';
import '../../../../components/ColorPicker';
import { changeChatTitle, getChatTitles } from '../../../../utility/chatTitles';
import { eventEmitter } from '../../../../state/eventEmitter';

class ChatTitleUpdater extends LitElement {
	static properties = {
		chatTitles: { type: Array },
		updatedTitles: { type: Object },
		selectedTitle: { type: String },
		currentInputValue: { type: String },
		selectedChatId: { type: Number },
		selectedColor: { type: String },
	};

	constructor() {
		super();
		this.chatTitles = this.chatTitles =
			JSON.parse(localStorage.getItem('chatTitles')) || this.handleChatTitles();
		this.updatedTitles = {};
		this.selectedTitle = '';
		this.currentInputValue = '';
		this.selectedChatId = null;
		this.selectedColor = '';
		eventEmitter.on('colorChanged', (data) => {
			this.selectedColor = data.color;
			this.requestUpdate();
		});
	}

	handleChatTitles() {
		const chatTitles = getChatTitles();

		return chatTitles.map((node, idx) => ({
			id: idx,
			title: node.textContent.trim(),
		}));
	}

	onTitleClick(title, id) {
		this.selectedTitle = title;
		this.selectedChatId = id;
		this.requestUpdate();
	}

	handleInputChange(event) {
		this.currentInputValue = event.target.value;
		if (this.selectedChatId !== null) {
			this.updatedTitles[this.selectedChatId] = {
				title: this.currentInputValue,
				color: this.selectedColor,
			};
		}
	}

	// Inside your ChatTitleUpdater component
	saveUpdatedChatTitles = () => {
		// Iterate over the keys in updatedTitles and update chatTitles accordingly
		Object.keys(this.updatedTitles).forEach((id) => {
			const idNum = parseInt(id);
			const { title, color } = this.updatedTitles[idNum];
			if (title || color) {
				this.chatTitles = this.chatTitles.map((chat, idx) =>
					idx === idNum ? { ...chat, title, color: this.selectedColor } : chat
				);
			}
		});

		// Save the updated titles to localStorage
		localStorage.setItem('chatTitles', JSON.stringify(this.chatTitles));
		this.updatedTitles = {}; // Clear updated titles
		this.requestUpdate();
	};

	renderChatTitles() {
		return this.chatTitles.map(
			(chat, idx) => html`
				<div
					class="chat-title"
					data-id=${idx}
					@click=${() => this.onTitleClick(chat.title, idx)}
				>
					<p>${chat.title}</p>
				</div>
			`
		);
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
			border: 1px solid gray;
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
					<div class="chat-titles-wrapper">${this.renderChatTitles()}</div>
				</div>
				<div class="chat-title-updater-bottom">
					<div class="chat-title-updater-input-wrapper">
						<input
							type="text"
							class="chat-title-updater-input"
							.value=${this.currentInputValue}
							placeholder=${this.selectedTitle || 'Select a chat title...'}
							@input=${this.handleInputChange}
						/>
					</div>
					<div class="chat-title-updater-color-picker-wrapper">
						<color-picker></color-picker>
					</div>
					<div class="chat-title-btn-container">
						<button-misc
							label="Update Chat Name"
							.handleClick=${() =>
								changeChatTitle(
									this.selectedChatId,
									this.currentInputValue,
									this.selectedColor
								)}
						></button-misc>
						<button-misc
							label="save"
							.handleClick=${this.saveUpdatedChatTitles}
						></button-misc>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('chat-title-updater-view', ChatTitleUpdater);

export default ChatTitleUpdater;
