function changeChatTitle(oldTitle, newTitle) {
	const chatTitles = '.relative.grow.overflow-hidden.whitespace-nowrap';

	document.querySelectorAll(chatTitles).forEach((chatTitle) => {
		if (chatTitle.textContent.trim() === oldTitle) {
			chatTitle.textContent = newTitle;
		}
	});
}

export default changeChatTitle;
