export function changeChatTitle(selectedChatId, newTitle, color) {
	const chatTitles = document.querySelectorAll(
		'.relative.grow.overflow-hidden.whitespace-nowrap'
	);

	chatTitles.forEach((chatTitle, idx) => {
		if (idx === selectedChatId) {
			chatTitle.textContent = newTitle;
			chatTitle.style.color = color || '#fff';
		}
	});
}
