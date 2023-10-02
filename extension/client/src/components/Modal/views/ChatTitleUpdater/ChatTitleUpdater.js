import { LitElement, html, css } from 'lit';

class ChatTitleUpdater extends LitElement {
	static styles = css`
		p {
			color: red;
		}
	`;

	render() {
		return html`
			<div id="chat-title-updater" class="chat-title-updater-container">
				<p>Rename chats</p>
			</div>
		`;
	}
}

customElements.define('chat-title-updater-view', ChatTitleUpdater);

export default ChatTitleUpdater;
