function saveChatTitles(selectedChatId, newTitle) {
	const chatTitles = document.querySelectorAll(
		'.relative.grow.overflow-hidden.whitespace-nowrap'
	);

	const updatedChatTitles = chatTitles.map((chat) =>
		chat.id === id ? { ...chat, title: newTitle } : chat
	);

	// Save the updated titles to local storage
	localStorage.setItem('chatTitles', JSON.stringify(updatedChatTitles));
}

export default saveChatTitles;
