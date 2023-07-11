import { html, css, LitElement } from 'lit';

class PopupContainer extends LitElement {
	static styles = css`
		:host {
			max-width: 1280px;
			margin: 0 auto;
			padding: 2rem;
			text-align: center;
		}
		/*...all your other CSS styles...*/
	`;

	constructor() {
		super();
		this.popupInfo = {
			docText: {
				header: 'ChatEXT',
				subHeader: 'Upload files to ChatGPT',
				description: 'Click here for more info',
				tooltip: 'Click the button or icon to learn more',
			},
		};
		this.docsHint = '';
	}

	render() {
		return html`
      <div>
        <a href="https://lifengineered.com/" target="_blank">
          <img src="assets/icons/icon-128.svg" class="logo" alt="ChatExt logo" />
        </a>
      </div>
      <div class="header-container">
        <h1>${this.popupInfo.docText.header}</h1>
        <h2>${this.popupInfo.docText.subHeader}</h2>
      </div>
      <a href="https://lifengineered.com/" target="_blank">
        <div class="button">
          ${this.popupInfo.docText.description}</p>
        </div>
      </a>
  
      <p class="read-the-docs">${this.popupInfo.docText.tooltip}</p>
    `;
	}
}

customElements.define('popup-container', PopupContainer);
