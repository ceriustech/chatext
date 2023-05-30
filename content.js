(function () {
	const targetElementSelector = '#prompt-textarea'; // Adjust this to match the Next.js structure
	let lastParentNode;

	function createAndInsertButton() {
		const targetElement = document.querySelector(targetElementSelector);
		if (targetElement && targetElement.parentElement !== lastParentNode) {
			lastParentNode = targetElement.parentElement;
			if (!document.querySelector('chat-ext-container')) {
				// Create a new script element
				const script = document.createElement('script');
				// Set the source of the script to your ChatExtContainer.js file
				script.src = chrome.runtime.getURL('client/ChatExtContainer.js');
				// Append it to the document head
				document.head.appendChild(script);

				script.onload = () => {
					const chatExtContainer = document.createElement('chat-ext-container');
					targetElement.parentElement.insertAdjacentElement(
						'beforebegin',
						chatExtContainer
					);
				};
			}
		}
	}

	// Observe the document for changes
	const observer = new MutationObserver((mutations) => {
		createAndInsertButton();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});

	// Create the initial button
	createAndInsertButton();
})();
