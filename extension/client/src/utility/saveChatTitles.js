function saveChatTitles(id, newTitle) {
	// Update the title in the component's state
	this.chatTitles = this.chatTitles.map((chat) =>
		chat.id === id ? { ...chat, title: newTitle } : chat
	);

	// Save the updated titles to local storage
	localStorage.setItem('chatTitles', JSON.stringify(this.chatTitles));
}

export default saveChatTitles;
