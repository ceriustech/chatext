async function waitForChatGPTReady() {
	return new Promise((resolve) => {
		const interval = setInterval(() => {
			if (!document.querySelector('.text-2xl > span:not(.invisible)')) {
				clearInterval(interval);
				resolve();
			}
		}, 1000);
	});
}

export default waitForChatGPTReady;
