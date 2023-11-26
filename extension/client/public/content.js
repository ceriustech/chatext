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
		// This line retrieves the 'chatTitles' array from localStorage.
		// JSON.parse is used to convert the string back into an array.
		// If there's nothing in localStorage, an empty array is used as a default.
		const storedChatTitles =
			JSON.parse(localStorage.getItem('chatTitles')) || [];

		// This forEach loop iterates over each item in the storedChatTitles array.
		storedChatTitles.forEach((storedChat, idx) => {
			// Here, all elements with the class '.relative.grow.overflow-hidden.whitespace-nowrap' are selected.
			// This creates a NodeList, which is similar to an array, of these elements.
			const chatElements = document.querySelectorAll(
				'.relative.grow.overflow-hidden.whitespace-nowrap'
			);

			// The if condition checks two things:
			// 1. If the element at the current index exists (to prevent errors if the index is out of bounds).
			// 2. If the text content of the current element does not already match the stored title.
			// The trim() method removes any leading/trailing whitespace from the text.
			if (
				chatElements[idx] &&
				chatElements[idx].textContent.trim() !== storedChat.title
			) {
				// If the conditions are true, the text content of the element is updated to the stored title.
				chatElements[idx].textContent = storedChat.title;

				// This logs the updated text content to the console for debugging.
				console.log(
					'🚀 ~ file: content.js:44 ~ storedChatTitles.forEach ~ chatElements:',
					chatElements[idx].textContent
				);

				// This conditional checks if a color property exists on the storedChat object.
				// If it does, it sets the text color of the current element to that color.
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
