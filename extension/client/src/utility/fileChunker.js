function fileChunker(text, fileName) {
	const CHUNK_SIZE = 15000;
	const chunks = text.match(new RegExp(`[\\s\\S]{1,${CHUNK_SIZE}}`, 'g')) || [];
	return chunks.map((chunk, index) => ({
		text: chunk,
		index: index + 1, // 1-based index
		fileName,
	}));
}

export default fileChunker;
