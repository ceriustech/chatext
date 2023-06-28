import { html, component } from 'haunted';
import Container from './src/components/Container/Container';

function Layout() {
	return html`
    <style>
    @media screen and (max-width: 768px) {
      .container {
        padding: 0 12px;
      }
    }
    </style>

    <div class="layout">
      <${Container} buttonText="Submit File To Chat"></${Container}>
    </div>
  `;
}

customElements.define('layout', component(Layout));

export default Layout;
