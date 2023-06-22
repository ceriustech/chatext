import { html, component, useEffect, useState } from 'haunted';

const MyElement = () => {
	const [docsHint, setDocsHint] = useState(
		'Click on the Vite and Lit logos to learn more'
	);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const handleClick = () => {
			setCount((prevCount) => prevCount + 1);
		};

		const button = document.querySelector('.button');
		button.addEventListener('click', handleClick);

		return () => {
			button.removeEventListener('click', handleClick);
		};
	}, []);

	return html`
		<style>
			:host {
				max-width: 1280px;
				margin: 0 auto;
				padding: 2rem;
				text-align: center;
			}

			.logo {
				height: 6em;
				padding: 1.5em;
				will-change: filter;
				transition: filter 300ms;
			}
			.logo:hover {
				filter: drop-shadow(0 0 2em #646cffaa);
			}
			.logo.lit:hover {
				filter: drop-shadow(0 0 2em #325cffaa);
			}

			.card {
				padding: 2em;
			}

			.read-the-docs {
				color: #888;
			}

			a {
				font-weight: 500;
				color: #646cff;
				text-decoration: inherit;
			}
			a:hover {
				color: #535bf2;
			}

			::slotted(h1) {
				font-size: 3.2em;
				line-height: 1.1;
			}

			.button {
				border-radius: 8px;
				border: 1px solid transparent;
				padding: 0.6em 1.2em;
				font-size: 1em;
				font-weight: 500;
				font-family: inherit;
				background-color: #1a1a1a;
				cursor: pointer;
				transition: border-color 0.25s;
			}
			.button:hover {
				border-color: #646cff;
			}
			.button:focus,
			.button:focus-visible {
				outline: 4px auto -webkit-focus-ring-color;
			}

			@media (prefers-color-scheme: light) {
				a:hover {
					color: #747bff;
				}
				.button {
					background-color: #f9f9f9;
				}
			}
		</style>
		<div>
			<a href="https://vitejs.dev" target="_blank">
				<img src="/vite.svg" class="logo" alt="Vite logo" />
			</a>
			<a href="https://lit.dev" target="_blank">
				<img src="/assets/lit.svg" class="logo lit" alt="Lit logo" />
			</a>
		</div>
		<slot></slot>
		<div class="card">
			<button class="button" @click=${() => setCount(count + 1)}>
				count is ${count}
			</button>
		</div>
		<p class="read-the-docs">${docsHint}</p>
	`;
};

customElements.define('my-element', component(MyElement));
