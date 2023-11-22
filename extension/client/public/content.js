(function () {
	const targetElementSelector = '#prompt-textarea';
	const chatGPTImageElementSelector =
		'.absolute.left-4.bottom-2.gizmo\\:md\\:bottom-3.md\\:left-4.gizmo\\:left-2.gizmo\\:md\\:left-4.md\\:bottom-3\\.5';
	let targetElement;
	let lastParentNode;
	let imageElement;
	const mediaQuery = window.matchMedia('(max-width: 768px)');
	let eventListenerAdded = false;
	let eventListenerCounter = 0;

	function handleMediaQueryChange(mediaQuery) {
		targetElement = document.querySelector(targetElementSelector);

		if (mediaQuery.matches) {
			targetElement.style.paddingLeft = '48px';
		} else {
			targetElement.style.paddingLeft = '48px';
		}
	}

	function handleImageElement(selector) {
		imageElement = document.querySelector(selector);
		if (imageElement) {
			imageElement.style.display = 'none';
		} else {
			console.log('UNABLE TO DETECT ELEMENT');
		}
	}

	function updateChatTitlesFromLocalStorage() {
		const storedChatTitles =
			JSON.parse(localStorage.getItem('chatTitles')) || [];

		storedChatTitles.forEach((storedChat, idx) => {
			const chatElements = document.querySelectorAll(
				'.relative.grow.overflow-hidden.whitespace-nowrap'
			);

			if (
				chatElements[idx] &&
				chatElements[idx].textContent.trim() !== storedChat.title
			) {
				chatElements[idx].textContent = storedChat.title;
				console.log(
					'🚀 ~ file: content.js:44 ~ storedChatTitles.forEach ~ chatElements:',
					chatElements[idx].textContent
				);

				// Optionally update the color if stored
				if (storedChat.color) {
					chatElements[idx].style.color = storedChat.color;
				}
			}
		});
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
		handleImageElement(chatGPTImageElementSelector);
		updateChatTitlesFromLocalStorage();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});

	createAndInsertButton();
})();
