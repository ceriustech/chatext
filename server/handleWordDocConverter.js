const mammoth = require('mammoth');
const fs = require('fs');

app.post('/convert', upload.single('file'), (req, res) => {
	console.log('File received: ', req.file);

	const pathToFile = req.file.path;

	mammoth
		.convertToPlainText({ path: pathToFile })
		.then(function (text) {
			fs.unlink(pathToFile, (err) => {
				if (err) console.error(err);
			}); // Delete the file after conversion
			res.send(text.value); // Send the converted text back to the client
		})
		.catch(function (err) {
			console.error(err);
			res.status(500).send('Conversion error');
		});
});
