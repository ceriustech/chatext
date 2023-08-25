(function () {
	const targetElementSelector = '#prompt-textarea';
	let targetElement;
	let lastParentNode;
	const mediaQuery = window.matchMedia('(max-width: 768px)');
	let eventListenerAdded = false;
	let eventListenerCounter = 0;

	function handleMediaQueryChange(mediaQuery) {
		targetElement = document.querySelector(targetElementSelector);

		if (mediaQuery.matches) {
			targetElement.style.paddingLeft = '48px';
		} else {
			targetElement.style.paddingLeft = '38px';
		}
	}

	function createAndInsertButton() {
		targetElement = document.querySelector(targetElementSelector);

		function setAndLoadScript() {
			if (targetElement && targetElement.parentElement !== lastParentNode) {
				lastParentNode = targetElement.parentElement;

				if (!document.querySelector('app-container')) {
					const script = document.createElement('script');
					script.src = chrome.runtime.getURL('main.min.js');
					script.type = 'module';
					document.head.appendChild(script);

					if (!eventListenerAdded) {
						eventListenerCounter++;
						console.log(`Event Listener Added ${eventListenerCounter} times.`);

						mediaQuery.addEventListener('change', handleMediaQueryChange);
						eventListenerAdded = true;
					}

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
