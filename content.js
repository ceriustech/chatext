(function () {
	const targetElementSelector = '#prompt-textarea';
	const regenResponsesSelector = 'div[class=""]';
	let lastParentNode;

	function createAndInsertButton() {
		const targetElement = document.querySelector(targetElementSelector);
		const regenResponseElement = document.querySelector(regenResponsesSelector);

		if (regenResponseElement) {
			regenResponseElement.firstChild.style.marginBottom = '0px';
		}

		if (targetElement && targetElement.parentElement !== lastParentNode) {
			lastParentNode = targetElement.parentElement;
			if (!document.querySelector('chat-ext-container')) {
				const script = document.createElement('script');
				script.src = chrome.runtime.getURL('client/ChatExtContainer.js');
				document.head.appendChild(script);

				script.onload = () => {
					const chatExtContainer = document.createElement('chat-ext-container');
					setTimeout(() => {
						// Insert after a delay
						lastParentNode.insertAdjacentElement(
							'beforebegin',
							chatExtContainer
						);
					}, 1500); // 1000 milliseconds = 1 second
				};
			}
		}
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
