(function () {
	const targetElementSelector = '#prompt-textarea';
	const chatGPTImageElementSelector = "[aria-label='Attach files']";
	let targetElement;
	let lastParentNode;
	let imageElement;
	const mediaQuery = window.matchMedia('(max-width: 768px)');
	let eventListenerAdded = false;
	let eventListenerCounter = 0;
	let markdownFound = false;
	let pollingAttempts = 0;
	const maxPollingAttempts = 10;

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

	function createDownloadButtons() {
		const markdownElements = document.querySelectorAll('.markdown');

		if (markdownElements.length > 0) {
			markdownFound = true;

			markdownElements.forEach((markdownElement) => {
				// Select only first-level p and pre elements inside markdown
				const childElements = markdownElement.querySelectorAll(
					':scope > p, :scope > pre, :scope > ol'
				);

				childElements.forEach((childElement) => {
					// Skip if the direct parent is not the markdownElement
					if (childElement.parentNode !== markdownElement) {
						return;
					}

					let contentToDownload = '';
					let downloadFileName = 'downloaded-content.txt';

					if (childElement.tagName === 'PRE') {
						const codeElement = childElement.querySelector('code');
						if (codeElement) {
							const languageClass = codeElement.className;
							const language = languageClass.match(/language-(\w+)/)?.[1];
							if (language) {
								contentToDownload = codeElement.textContent;
								downloadFileName = `code.${language}`;
							}
						}
					} else {
						contentToDownload = childElement.textContent;
					}

					if (contentToDownload) {
						const downloadButton = document.createElement('a');
						downloadButton.href = `data:text/plain;charset=utf-8,${encodeURIComponent(
							contentToDownload
						)}`;
						downloadButton.download = downloadFileName;
						downloadButton.textContent = 'Download';
						downloadButton.style.marginLeft = '10px';

						const container = document.createElement('div');
						container.classList.add('chatext-download-btn-container');

						container.style.display = 'flex';
						container.style.justifyContent = 'space-between';
						container.style.alignItems = 'flex-start';
						if (childElement.tagName !== 'PRE') {
							downloadButton.style.marginTop = '20px';
						}

						childElement.parentNode.insertBefore(container, childElement);
						container.appendChild(childElement);
						container.appendChild(downloadButton);
					}
				});
			});
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

	// MutationObserver Logic
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.addedNodes.length) {
				createDownloadButtons();
			}
		});

		createAndInsertButton();
		handleImageElement(chatGPTImageElementSelector);
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});

	// Polling Logic
	const pollingInterval = setInterval(() => {
		if (!markdownFound && pollingAttempts < maxPollingAttempts) {
			createDownloadButtons();
			pollingAttempts++;
		} else {
			console.log('Polling stopped.');
			clearInterval(pollingInterval); // Stop polling
		}
	}, 1000);

	createAndInsertButton();
	setTimeout(createDownloadButtons, 2500);
})();
