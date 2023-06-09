import { html, component } from 'haunted';
import SubmitFile from '../Buttons/SubmitFile';
import ProgressBar from '../ProgressBar';

function Container() {
	return html`
    <style>
    @media screen and (max-width: 768px) {
      .container {
        padding: 0 12px;
      }
    }
    </style>

    <div class="container">
      <${SubmitFile} buttonText="Submit File To Chat"></${SubmitFile}>
      <${ProgressBar}></${ProgressBar}>
    </div>
  `;
}

customElements.define('container', component(Container));

export default Container;
