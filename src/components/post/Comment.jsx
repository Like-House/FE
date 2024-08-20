import * as S from './Comment.style';

import { formatDate } from '@/utils';
import { Avatar, PopOver } from '@/components';
import useGetNicknameImg from '@/hooks/queries/posts/useGetNicknameImg';
import NoImg from '@/assets/images/profile.webp';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { FaEdit, FaTrashAlt, FaRegBellSlash } from 'react-icons/fa';
import { useState } from 'react';
import useDeleteComment from '@/hooks/queries/comment/useDeleteComment';
import { useParams } from 'react-router-dom';
import usePatchComment from '@/hooks/queries/comment/usePatchComment';

const Comment = ({ comment }) => {
	const { postId } = useParams();
	const {
		content,
		userNickname,
		createdAt,
		userProfileImage,
		commentId,
		owner,
	} = comment;
	const [showMenu, setShowMenu] = useState(false);
	const [update, setUpdate] = useState(false);
	const [userInput, setUserInput] = useState('');

	const { data: userImg } = useGetNicknameImg(userNickname, userProfileImage);
	const { mutate } = useDeleteComment(postId);
	const { mutate: patchMutate } = usePatchComment(postId);

	const handleMouseLeave = () => {
		setShowMenu(false);
	};

	const ownerCommentItems = [
		{
			icon: <FaEdit />,
			message: '댓글수정하기',
			onClick: () => {
				setShowMenu(false);
				setUpdate(prev => !prev);
			},
		},
		{
			icon: <FaTrashAlt />,
			message: '댓글삭제하기',
			onClick: () => {
				mutate(commentId);
			},
		},
		{
			icon: <FaRegBellSlash />,
			message: '알림끄기',
			onClick: () => {
				console.log('알림끄기 클릭됨');
			},
		},
	];

	const commentItems = [
		{
			icon: <FaRegBellSlash />,
			message: '알림끄기',
			onClick: () => {
				console.log('알림끄기 클릭됨');
			},
		},
	];

	const handleUpdate = e => {
		e.preventDefault();
		patchMutate({ commentId, content: userInput });
		setUserInput('');
		setUpdate(false);
	};

	return (
		<S.Container>
			<S.Profile>
				<Avatar src={userProfileImage ? userImg : NoImg} />
			</S.Profile>
			<S.Board>
				<S.PostHeader>
					<S.AuthorWrapper>
						<S.Author>{userNickname}</S.Author>
						<S.DateTime>{formatDate(createdAt)}</S.DateTime>
					</S.AuthorWrapper>
					{!update && (
						<S.MenuButton>
							<HiMiniEllipsisHorizontal
								onClick={() => setShowMenu(prev => !prev)}
							/>

							{showMenu && (
								<S.Popover>
									<PopOver
										items={owner ? ownerCommentItems : commentItems}
										onMouseLeave={handleMouseLeave}
									/>
								</S.Popover>
							)}
						</S.MenuButton>
					)}
				</S.PostHeader>
				{update ? (
					<form onSubmit={handleUpdate}>
						<input
							placeholder={content}
							type="text"
							value={userInput}
							onChange={e => setUserInput(e.target.value)}
						/>
						<button disabled={userInput === ''} onSubmit={handleUpdate}>
							수정하기
						</button>
					</form>
				) : (
					<div>{content}</div>
				)}
			</S.Board>
		</S.Container>
	);
};

export default Comment;
