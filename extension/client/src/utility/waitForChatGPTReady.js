async function waitForChatGPTReady() {
	return new Promise((resolve) => {
		const interval = setInterval(() => {
			if (!document.querySelector("[aria-label='Stop generating']")) {
				clearInterval(interval);
				resolve();
			} else {
				console.log('Waiting for chat GPT to be ready...');
			}
		}, 1000);
	});
}

export default waitForChatGPTReady;
