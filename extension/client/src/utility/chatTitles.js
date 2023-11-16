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

export function updateChatTitlesFromLocalStorage() {
	const storedChatTitles = JSON.parse(localStorage.getItem('chatTitles')) || [];

	storedChatTitles.forEach((storedChat, idx) => {
		const chatElements = document.querySelectorAll(
			'.relative.grow.overflow-hidden.whitespace-nowrap'
		);
		if (
			chatElements[idx] &&
			chatElements[idx].textContent.trim() !== storedChat.title
		) {
			chatElements[idx].textContent = storedChat.title;
			// Optionally update the color if stored
			if (storedChat.color) {
				chatElements[idx].style.color = storedChat.color;
			}
		}
	});
}
