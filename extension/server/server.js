const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const mammoth = require('mammoth');
const fs = require('fs');
const port = 3030;

app.use(cors());

app.post('/convert', upload.single('file'), async (req, res) => {
	if (req.file) {
		console.log('File received: ', req.file);
		const path = req.file.path;

		try {
			const result = await mammoth.extractRawText({ path });
			console.log('Extracted Text:', result.value);

			if (result.value.trim() === '') {
				res.status(400).send('File converted but resulted in empty text.');
			} else {
				fs.unlinkSync(path); // remove the file after conversion
				res.send(result.value);
			}
		} catch (err) {
			console.error(err);
			res.status(500).send('Error converting file');
		}
	} else {
		console.log('No file received');
		res.send('No file received');
	}
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
