import { LitElement, html, css } from 'lit';
import { eventEmitter } from '../../state/eventEmitter';

class ColorPicker extends LitElement {
	static properties = {
		selectedColor: { type: String, reflect: true },
	};

	constructor() {
		super();
		this.selectedColor = '#000000';
	}

	handleColorChange(event) {
		this.selectedColor = event.target.value;
		eventEmitter.emit('colorChanged', { color: this.selectedColor });
	}

	static styles = css`
		.color-picker-container {
			display: flex;
			justify-content: end;
			gap: 5px;
			font-size: 12px;
		}

		input[type='color'] {
			background: transparent;
			border: 1px solid gray;
			padding: 5px;
			border-radius: 4px;
			cursor: pointer;
		}

		.color-picker-label {
			color: #6c6f72;
			font-size: 0.95rem;
			font-weight: 600;
			margin-bottom: 0.5rem;
		}
	`;

	render() {
		return html`
			<div class="color-picker-container">
				<label class="color-picker-label" for="color-picker"
					>Choose a color</label
				>
				<input
					type="color"
					@input=${this.handleColorChange}
					value=${this.selectedColor}
				/>
			</div>
		`;
	}
}

customElements.define('color-picker', ColorPicker);

export default ColorPicker;
