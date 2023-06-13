import { html, component } from 'haunted';

function ProgressBar() {
	return html`
		<style>
			.progress-bar-container {
				width: 90%;
				height: 6px;
				border: 1px solid #000;
				margin-bottom: 10px;
			}

			.progress-bar {
				width: 0%;
				height: 100%;
			}
		</style>

		<div class="progress-bar-container">
			<div class="progress-bar"></div>
		</div>
	`;
}

customElements.define('progress-bar', component(ProgressBar));

export default ProgressBar;
