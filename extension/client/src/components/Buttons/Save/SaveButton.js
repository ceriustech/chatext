import { LitElement, html, css } from 'lit';

class SaveButton extends LitElement {
	static properties = {
		label: { type: String },
		handleClick: { type: Function },
	};

	static styles = css`
		.save-chat-title-btn {
			background-color: #fff;
			border: 1px solid #6c6f72;
			border-radius: 4px;
			padding: 5px 16px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 12px;
			font-weight: 600;
			margin: 10px 2px;
			cursor: pointer;
			color: #6c6f72;
		}

		.save-chat-title-btn:hover {
			border: 1px solid #7e1e89;
		}

		p {
			font-size: 0.95rem;
			margin: 0;
		}
	`;

	render() {
		return html` <button class="save-chat-title-btn" @click=${this.handleClick}>
			<p>${this.label}</p>
		</button>`;
	}
}

customElements.define('save-button', SaveButton);

export default SaveButton;
