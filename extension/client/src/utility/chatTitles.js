export function generateChatId() {
	return `chat-id-${Math.random().toString(36).substr(2, 9)}`;
}

export function getChatTitles() {
	const chatTitles = Array.from(
		document.querySelectorAll(
			'.relative.grow.overflow-hidden.whitespace-nowrap'
		)
	).filter((node) => !node.classList.contains('-space-y-px'));

	chatTitles.forEach((chatTitle) => {
		chatTitle.setAttribute('data-chat-id', generateChatId());
	});

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
