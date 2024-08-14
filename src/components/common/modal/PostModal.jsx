import { useState, useEffect } from 'react';

import { BsXCircle } from 'react-icons/bs';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import * as S from './PostModal.style';
import useWritePosts from '@/hooks/queries/posts/useWritePosts.js';
import useFamilySpaceId from '@/hooks/useFamilySpaceId.js';
import useGetFamilyList from '@/hooks/queries/family/useGetFamilyList';
import Dropdown from '@/components/common/dropdown/Dropdown';
import { createPresignedURL, uploadImageToS3 } from '@/apis';

const PostModal = ({
	isOpen,
	closeModal
}) => {
	const [step, setStep] = useState(1);
	const [inputValue, setInputValue] = useState('');
	const [selectedOption, setSelectedOption] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [imageKey, setImageKey] = useState('');

	const { mutate: writePost } = useWritePosts();
	const { data: familyList } = useGetFamilyList();
	const { data } = useFamilySpaceId();

	useEffect(() => {
		if (isOpen) {
			setStep(1);
			setInputValue('');
			setImageFile(null);
			setImageKey('');
			setSelectedOption('');
		}
	}, [isOpen]);

	const handleLeftButtonClick = () => {
		if (step === 1) {
			const fileInput = document.createElement('input');
			fileInput.type = 'file';
			fileInput.accept = 'image/*';
			fileInput.onchange = async (event) => {
				const file = event.target.files[0];
				if (file) {
					const newImageKey = `${Date.now()}_${file.name}`;
					setImageFile(file);
					setImageKey(newImageKey);

					const { result: { url } } = await createPresignedURL(file.name);

					await uploadImageToS3({ url, file });

					setImageKey(newImageKey);
				}
			};
			fileInput.click();
		} else if (step > 1) {
			setStep(step - 1);
		}
	};

	const handleRightButtonClick = async () => {
		if (step === 1) {
			if (inputValue.trim() !== '') {
				setStep(step + 1);
			}
		} else if (step === 2) {
			const selectedFamily = familyList?.familyDataList?.find(family => family.name === selectedOption);
      const userId = selectedFamily?.userId || 0; 
			const userName = selectedFamily?.name || 0;
			console.log("이름", userName);

			const postData =
				{ 
					familySpaceId: data?.familySpaceId,
					content: inputValue,
					taggedUserIds: [
						{
							userId: userId,
							nickname: userName,
						}
					],
					imageUrls: [
						imageKey,
					]
				};
			console.log(postData);
			writePost(postData);
			closeModal();
		}
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleDropdownChange = (option) => {
		setSelectedOption(option);
	};

	const dropdownOptions = familyList?.familyDataList?.map(family => family.name) || [];

	const renderContent = () => {
		if (step === 1) {
			return (
				<textarea
					value={inputValue}
					onChange={handleInputChange}
					placeholder="내용을 입력해주세요."
				/>
			);
		}
		if (step === 2) {
			return (
				<Dropdown
					label={'누구와 관련이 있나요?'}
					options={dropdownOptions}
					openIcon={<RiArrowDropDownLine size={'30px'} />}
					closeIcon={<RiArrowDropUpLine size={'30px'} />}
					onSelect={handleDropdownChange}
				/>
			);
		}
		return null;
	};

	return (
		<>
			{isOpen && (
				<S.ModalBackground>
					<S.ModalContainer>
						<S.ModalHeader>
							<button onClick={closeModal}>
								<BsXCircle />
							</button>
						</S.ModalHeader>
						<S.ModalContent>
							{renderContent()}
						</S.ModalContent>
						<S.ModalFooter>
							<button onClick={handleLeftButtonClick}>
								{step === 1 ? '사진첨부' : '이전'}
							</button>
							<button 
								onClick={handleRightButtonClick}
								disabled={step === 1 && inputValue.trim() === ''} 
							>
								{step === 1 ? '다음' : '제출'}
							</button>
						</S.ModalFooter>
					</S.ModalContainer>
				</S.ModalBackground>
			)}
		</>
	);
};

export default PostModal;
