import { useState } from 'react';

const useFile = () => {
	const [file, setFile] = useState(null);
	const [filePreview, setFilePreview] = useState(null);

	const [files, setFiles] = useState([]);
	const [filesPreview, setFilesPreviews] = useState([]);

	const handleChangeFile = e => {
		if (e.target.files) {
			const selectedFile = e.target.files[0];
			setFile(selectedFile);
			setFilePreview(URL.createObjectURL(selectedFile));
		}
	};

	const handleChangeFiles = e => {
		if (e.target.files) {
			const files = Array.from(e.target.files);
			setFiles(prev => [...prev, ...files]);

			const selectedPreviews = files.map(file => URL.createObjectURL(file));
			setFilesPreviews(prev => [...prev, ...selectedPreviews]);
		}
	};

	const filesClear = () => {
		setFiles([]);
		setFilesPreviews([]);
	};

	return {
		file,
		filePreview,
		handleChangeFile,
		files,

		filesPreview,
		handleChangeFiles,
		filesClear,
	};
};

export default useFile;
