export function getChatTitles() {
	const chatTitles = Array.from(
		document.querySelectorAll(
			'.relative.grow.overflow-hidden.whitespace-nowrap'
		)
	).filter((node) => !node.classList.contains('-space-y-px'));

	return chatTitles;
}

export function changeChatTitle(selectedChatId, newTitle, color) {
	const chatTitles = getChatTitles();

	chatTitles.forEach((chatTitle, idx) => {
		if (idx === selectedChatId) {
			chatTitle.textContent = newTitle;
			chatTitle.style.color = color || '#fff';
		}
	});
}
