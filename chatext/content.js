// (function () {
// 	const targetElementSelector = '#prompt-textarea';
// 	let lastParentNode;

// 	function createAndInsertButton() {
// 		const targetElement = document.querySelector(targetElementSelector);

// 		function setAndLoadScript() {
// 			if (targetElement && targetElement.parentElement !== lastParentNode) {
// 				lastParentNode = targetElement.parentElement;

// 				if (!document.querySelector('container')) {
// 					const script = document.createElement('script');
// 					script.src = chrome.runtime.getURL(
// 						'client/src/components/Container/index.js'
// 					);
// 					script.type = 'module';
// 					document.head.appendChild(script);

// 					script.onload = () => {
// 						const chatExtContainer = document.createElement('container');
// 						// Insert after a delay
// 						targetElement.insertAdjacentElement(
// 							'beforebegin',
// 							chatExtContainer
// 						);
// 					};
// 				}
// 			}
// 		}

// 		setAndLoadScript();
// 	}

// 	const observer = new MutationObserver((mutations) => {
// 		createAndInsertButton();
// 	});

// 	observer.observe(document.body, {
// 		childList: true,
// 		subtree: true,
// 	});

// 	createAndInsertButton();
// })();

console.log('HELLO WORLD');
