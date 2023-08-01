const convertToText = (formData) => {
	return fetch('http://localhost:3030/convert', {
		method: 'POST',
		body: formData,
	})
		.then((response) => response.text())
		.catch((error) => console.error(error));
};

export const handleFileUpload = (file) => {
	let formData = new FormData();
	formData.append('file', file);
	return convertToText(formData);
};
