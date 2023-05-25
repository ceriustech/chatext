(function () {
	const stateCheck = setInterval(function () {
		if (document.readyState === 'complete') {
			clearInterval(stateCheck);

			function createElements() {
				const downloadButton = document.createElement('download-button');
				return downloadButton;
			}

			const downloadButton = createElements();

			function addElements(targetEl) {
				targetEl.insertAdjacentElement('beforebegin', downloadButton);
			}

			const targetElement =
				document.querySelector('#prompt-textarea').parentElement;
			addElements(targetElement);
		}
	});
})();
