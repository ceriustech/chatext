const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 3030;

app.post('/convert', upload.single('file'), async (req, res) => {
	// req.file is the uploaded file
	// For now, just send a simple response. You'll replace this with the file conversion logic.
	if (req.file) {
		console.log('File received: ', req.file); // This will print the file information to the console
		res.send('File received, conversion logic to be implemented');
	} else {
		console.log('No file received'); // This will print the message to the console
		res.send('No file received');
	}
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
