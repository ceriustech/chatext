function changeChatTitle(selectedChatId, newTitle) {
	const chatTitles = document.querySelectorAll(
		'.relative.grow.overflow-hidden.whitespace-nowrap'
	);

	chatTitles.forEach((chatTitle, idx) => {
		if (idx === selectedChatId) {
			chatTitle.textContent = newTitle;
		}
	});
}

export default changeChatTitle;
