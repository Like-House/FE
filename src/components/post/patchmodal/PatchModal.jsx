import * as S from './PatchModal.style';

import { Avatar, Dropdown } from '@/components';
import CloseIcon from '@/assets/images/whiteX.png';
import useGetPostById from '@/hooks/queries/posts/useGetPostById';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import useGetFamilyList from '@/hooks/queries/family/useGetFamilyList';
import { useEffect, useState } from 'react';
import useUpdatePost from '@/hooks/queries/posts/useUpdatePost';
import useGetImageUrls from '@/hooks/queries/image/useGetImageUrls';

const PatchModal = ({ avatar, postId, onClose }) => {
	const { data } = useGetPostById(postId);
	const { data: familyData } = useGetFamilyList();
	const { mutate } = useUpdatePost();
	const { data: imgData } = useGetImageUrls(data?.postId, data?.imageUrls);

	const [userInput, setUserInput] = useState('');
	const [selected, setSelectedOption] = useState('');

	const user = familyData?.familyDataList.filter(e => e.nickname === selected);

	useEffect(() => {
		if (data?.content) {
			setUserInput(data.content);
		}

		if (data?.taggedUsers) {
			setSelectedOption(data?.taggedUsers[0].nickname);
		}
	}, [data]);

	const handleDropdownChange = op => {
		setSelectedOption(op);
	};

	const handleSubmit = () => {
		mutate({
			postId,
			updatedData: {
				postId: data?.postId,
				content: userInput,
				taggedUserIds: [
					{
						userId:
							user && user.length > 0
								? user[0].userId
								: data?.taggedUsers[0].userId,
						nickname:
							user && user.length > 0
								? user[0].nickname
								: data?.taggedUsers[0].nickname,
					},
				],
				imageUrls: data?.imageUrls,
			},
		});
		onClose();
	};

	return (
		<S.Backdrop>
			{data && (
				<S.ModalContainer>
					<S.ModalHeader>
						<S.CloseButton onClick={onClose}>
							<img src={CloseIcon} />
						</S.CloseButton>
					</S.ModalHeader>
					<S.PostContainer>
						<S.ProfileArea>
							<Avatar src={avatar} size="sm" />
							<h4>{data?.authorNickname}</h4>
						</S.ProfileArea>
						<S.ContentContainer>
							<S.Content>
								<div>
									<Dropdown
										label={selected}
										options={familyData?.familyDataList.map(e => e.nickname)}
										openIcon={<RiArrowDropDownLine size={'30px'} />}
										closeIcon={<RiArrowDropUpLine size={'30px'} />}
										onSelect={handleDropdownChange}
									/>
								</div>
								<S.Comment
									type="text"
									value={userInput}
									onChange={e => setUserInput(e.target.value)}
								/>
								{imgData?.presignedUrlDownLoadResponseLists.map((e, idx) => (
									<S.PostImg src={e.url} key={idx} />
								))}
							</S.Content>
						</S.ContentContainer>
					</S.PostContainer>
					<S.ModalFooter>
						<S.Button onClick={handleSubmit}>수정 완료</S.Button>
					</S.ModalFooter>
				</S.ModalContainer>
			)}
		</S.Backdrop>
	);
};

export default PatchModal;
