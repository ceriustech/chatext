export function generateChatId() {
	return `chat-id-${Math.random().toString(36).substr(2, 9)}`;
}

export function getChats() {
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
