const convertToText = (formData) => {
	return fetch('http://localhost:3030/convert', {
		method: 'POST',
		body: formData,
	})
		.then((response) => response.text())
		.then((text) => {
			console.log('Received text:', text);
			return text;
		})
		.catch((error) => {
			console.error(error);
			throw error;
		});
};

export const handleFileUpload = (file) => {
	console.log('FILE', file);
	let formData = new FormData();
	formData.append('file', file);
	return convertToText(formData);
};
