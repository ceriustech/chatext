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

			const DOC_TYPES_MAP = {
				// ... your DOC_TYPES_MAP object ...
			};

			const MIME_TYPES_MAP = {
				js: 'application/javascript',
				py: 'application/x-python',
				html: 'text/html',
				css: 'text/css',
				// ... add other MIME types as needed ...
			};

			markdownElements.forEach((markdownElement) => {
				const childElements = markdownElement.querySelectorAll(':scope > pre');

				childElements.forEach((childElement) => {
					if (childElement.parentNode !== markdownElement) {
						return;
					}

					const DOC_TYPES_MAP = {
						java: 'java',
						cpp: 'cpp',
						c: 'c',
						csharp: 'cs',
						ruby: 'rb',
						swift: 'swift',
						kotlin: 'kt',
						php: 'php',
						sql: 'sql',
						r: 'R',
						perl: 'pl',
						scala: 'scala',
						rust: 'rs',
						dart: 'dart',
						lua: 'lua',
						matlab: 'm',
						shell: 'sh',
						powershell: 'ps1',
						haskell: 'hs',
						cobol: 'cob',
						fortran: 'f',
						ada: 'adb', // Note: 'adb' for Ada body files, 'ads' for Ada spec files
						scheme: 'scm',
						erlang: 'erl',
						d: 'd',
						vhdl: 'vhd',
						verilog: 'v',
						assembly: 'asm',
						clojure: 'clj',
						groovy: 'groovy',
						javascript: 'js',
						jsx: 'jsx',
						vue: 'vue',
						typescript: 'ts',
						tsx: 'tsx',
						python: 'py',
						html: 'html',
						css: 'css',
						json: 'json',
						go: 'go',
					};

					const MIME_TYPES_MAP = {
						java: 'text/x-java-source,java',
						cpp: 'text/x-c',
						h: 'text/x-c',
						cs: 'text/plain', // MIME type for C# files
						rb: 'text/x-ruby',
						swift: 'text/x-swift',
						kt: 'text/x-kotlin',
						php: 'application/x-httpd-php',
						sql: 'application/sql',
						R: 'text/x-r-source',
						pl: 'text/x-perl',
						scala: 'text/x-scala',
						rs: 'text/rust',
						dart: 'application/vnd.dart',
						lua: 'text/x-lua',
						m: 'text/x-matlab',
						sh: 'application/x-sh',
						ps1: 'application/x-powershell',
						hs: 'text/x-haskell',
						cob: 'text/x-cobol',
						cbl: 'text/x-cobol',
						f: 'text/x-fortran',
						f90: 'text/x-fortran',
						adb: 'text/plain', // Ada doesn't have a specific MIME type
						ads: 'text/plain', // Ada doesn't have a specific MIME type
						scm: 'text/x-scheme',
						erl: 'text/x-erlang',
						d: 'text/x-d',
						vhd: 'text/x-vhdl',
						v: 'text/x-verilog',
						asm: 'text/x-asm',
						clj: 'text/x-clojure',
						groovy: 'text/x-groovy',
						js: 'application/javascript',
						jsx: 'text/jsx',
						vue: 'text/vue',
						ts: 'application/x-typescript',
						tsx: 'text/tsx',
						py: 'application/x-python',
						html: 'text/html',
						css: 'text/css',
						json: 'application/json',
						go: 'text/x-go',
					};

					let contentToDownload = '';
					let downloadFileName = 'downloaded-content';

					if (childElement.tagName === 'PRE') {
						const codeElement = childElement.querySelector('code');
						if (codeElement) {
							const languageClass = codeElement.className;
							const languageMatch = languageClass.match(/language-(\w+)/);
							if (languageMatch) {
								const language = languageMatch[1];
								console.log(
									'🚀 ~ file: content.js:164 ~ childElements.forEach ~ language:',
									language
								);

								contentToDownload = codeElement.textContent;

								const fileExtension = DOC_TYPES_MAP[language] || 'txt';
								console.log(
									'🚀 ~ file: content.js:167 ~ childElements.forEach ~ fileExtension:',
									fileExtension
								);

								const mimeType = MIME_TYPES_MAP[fileExtension] || 'text/plain';
								console.log(
									'🚀 ~ file: content.js:170 ~ childElements.forEach ~ mimeType:',
									mimeType
								);
								downloadFileName = `code.${fileExtension}`;

								const downloadButton = document.createElement('a');
								downloadButton.classList.add('chatext-download-btn');
								downloadButton.href = `data:${mimeType};charset=utf-8,${encodeURIComponent(
									contentToDownload
								)}`;
								downloadButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="16px" height="16px">
									<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
										<g transform="scale(6.4,6.4)">
											<path d="M10.241,20.5h7.259v-19h5v19h7.259l-9.759,9.792z" fill="#7e1e89" stroke="none"></path>
											<path d="M22,2v18v1h1h5.554l-8.554,8.583l-8.554,-8.583h5.554h1v-1v-18h4M23,1h-6v19h-7.963l10.963,11l10.963,-11h-7.963v-19z" fill="#7e1e89" stroke="none"></path>
											<path d="M1.5,29.5v9h37v-9" fill="none" stroke="#7e1e89"></path>
										</g>
									</g>
							</svg>`;
								downloadButton.download = downloadFileName;

								const container = document.createElement('div');
								container.classList.add('chatext-download-btn-container');
								container.style.display = 'flex';
								container.style.justifyContent = 'space-between';
								container.style.alignItems = 'flex-end';
								if (childElement.tagName !== 'PRE') {
									downloadButton.style.marginTop = '20px';
								}

								childElement.parentNode.insertBefore(container, childElement);
								container.appendChild(childElement);
								container.appendChild(downloadButton);
							}
						}
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

							// Add CSS for the download button hover effect
							const style = document.createElement('style');
							style.textContent = `
									.chatext-download-btn {
										cursor: pointer;
										display: flex;
										justify-content: center;
										align-items: center;
										border-radius: 25px;
										padding: 5px;
										width: 25px;
										height: 25px;
										background-color: #D1D5DB;
										margin-left: 10px;
										transition: transform 0.3s ease-in-out;
									}
						 `;
							document.head.appendChild(style);
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
