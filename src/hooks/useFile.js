import { useState } from 'react';

const useFile = () => {
	const [file, setFile] = useState(null);
	const [filePreview, setFilePreview] = useState(null);

	const handleChangeFile = e => {
		if (e.target.files) {
			const selectedFile = e.target.files[0];
			setFile(selectedFile);
			setFilePreview(URL.createObjectURL(selectedFile));
		}
	};

	return { file, filePreview, handleChangeFile };
};

export default useFile;
