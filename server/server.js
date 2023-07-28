const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 3030;

app.post('/convert', upload.single('file'), (req, res) => {
	// req.file is the uploaded file
	// We'll fill in this function later.
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

app.listen(3000, () => console.log('Server is running on port 3000.'));
