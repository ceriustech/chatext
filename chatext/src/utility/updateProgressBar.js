function updateProgressBar(index, totalChunks) {
	const progressBar = document.querySelector('.progress-bar');
	if (progressBar) {
		progressBar.style.width = `${((index + 1) / totalChunks) * 100}%`;
	}
}

export default updateProgressBar;
