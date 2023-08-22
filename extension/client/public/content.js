(function () {
	const targetElementSelector = '#prompt-textarea';
	const targetElement = document.querySelector(targetElementSelector);
	let lastParentNode;
	const mediaQuery = window.matchMedia('(max-width: 768px)');

	function handleMediaQueryChange(mediaQuery) {
		if (mediaQuery.matches) {
			targetElement.style.paddingLeft = '48px';
		} else {
			targetElement.style.paddingLeft = '38px';
		}
	}

	function createAndInsertButton() {
		function setAndLoadScript() {
			if (targetElement && targetElement.parentElement !== lastParentNode) {
				lastParentNode = targetElement.parentElement;

				if (!document.querySelector('app-container')) {
					const script = document.createElement('script');
					script.src = chrome.runtime.getURL('main.min.js');
					script.type = 'module';
					document.head.appendChild(script);

					mediaQuery.addEventListener('change', () =>
						handleMediaQueryChange(mediaQuery)
					);
					handleMediaQueryChange(mediaQuery);

					script.onload = () => {
						const chatExtContainer = document.createElement('app-container');
						// Insert after a delay
						setTimeout(() => {
							targetElement.insertAdjacentElement(
								'beforebegin',
								chatExtContainer
							);

							lastParentNode.style.flexDirection = 'row';
							lastParentNode.style.position = 'relative';
						}, 100);
					};
				}
			}
		}

		setAndLoadScript();
	}

	const observer = new MutationObserver((mutations) => {
		createAndInsertButton();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});

	createAndInsertButton();
})();
