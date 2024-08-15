import { createPresignedURL, uploadImageToS3 } from '@/apis';
import useWebSocketStore from '@/store/useWebSocketStore';
import { useState } from 'react';

const useFile = () => {
	const { sendMessage } = useWebSocketStore();
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

	const handleFileSelectAndSend = async (e, chatRoomId) => {
		if (e.target.files) {
			const files = Array.from(e.target.files);
			setFiles(prev => [...prev, ...files]);
			for (let i = 0; i < files.length; i++) {
				const data = await createPresignedURL(files[i].name);
				await uploadImageToS3({ url: data.result.url, file: files[i] });

				let message = JSON.stringify({
					chatType: 'TALK',
					imageKeyName: data.result.keyName,
					content: null,
					chatRoomId,
				});

				sendMessage(message);
			}
			filesClear();
		}
	};

	return {
		file,
		filePreview,
		handleChangeFile,
		files,

		filesPreview,
		handleChangeFiles,
		filesClear,

		handleFileSelectAndSend,
	};
};

export default useFile;
