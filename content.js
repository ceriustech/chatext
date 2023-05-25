(function () {
	const stateCheck = setInterval(() => {
		if (document.readyState === 'complete') {
			clearInterval(stateCheck);
			// Create a new script element
			const script = document.createElement('script');
			// Set the source of the script to your DownloadButton.js file
			script.src = chrome.runtime.getURL('DownloadButton.js');
			// Append it to the document head
			document.head.appendChild(script);

			script.onload = () => {
				const downloadButton = document.createElement('download-button');
				const targetElement =
					document.querySelector('#prompt-textarea').parentElement;
				targetElement.insertAdjacentElement('beforebegin', downloadButton);
			};
		}
	}, 100);
})();
