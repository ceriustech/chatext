import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Setting the workerSrc for pdf.js
GlobalWorkerOptions.workerSrc = '../pdf.worker';

export const handleFileUpload = (file) => {
	return new Promise(async (resolve, reject) => {
		if (file.name.endsWith('.docx')) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const arrayBuffer = event.target.result;

				mammoth
					.extractRawText({ arrayBuffer: arrayBuffer })
					.then((result) => resolve(result.value))
					.catch(reject);
			};
			reader.onerror = reject;
			reader.readAsArrayBuffer(file);
		} else if (file.name.endsWith('.pdf')) {
			try {
				const pdf = await pdfjsLib.getDocument({
					data: await file.arrayBuffer(),
				}).promise;
				let text = '';

				for (let i = 1; i <= pdf.numPages; i++) {
					const page = await pdf.getPage(i);
					const content = await page.getTextContent();
					text += content.items.map((item) => item.str).join(' ') + '\n';
				}

				resolve(text);
			} catch (err) {
				reject(err);
			}
		} else {
			const reader = new FileReader();
			reader.onload = (event) => {
				resolve(event.target.result);
			};
			reader.onerror = reject;
			reader.readAsText(file);
		}
	});
};
