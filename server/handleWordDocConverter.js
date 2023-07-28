const mammoth = require('mammoth');

app.post('/convert', upload.single('file'), (req, res) => {
	mammoth
		.extractRawText({ path: req.file.path })
		.then(function (result) {
			let text = result.value; // The raw text
			res.send(text); // Send the text as a response
		})
		.done();
});
