import * as S from './Comment.style';

import { formatDate } from '@/utils';
import { Avatar, CustomButton, PopOver } from '@/components';
import useGetNicknameImg from '@/hooks/queries/posts/useGetNicknameImg';
import NoImg from '@/assets/images/profile.webp';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { FaEdit, FaTrashAlt, FaRegBellSlash, FaRegBell } from 'react-icons/fa';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { useState } from 'react';
import useDeleteComment from '@/hooks/queries/comment/useDeleteComment';
import { useNavigate, useParams } from 'react-router-dom';
import usePatchComment from '@/hooks/queries/comment/usePatchComment';
import usePatchAlarmComment from '@/hooks/queries/comment/usePatchAlarmComment';
import { PAGE_PATH } from '@/constants';

const Comment = ({ comment }) => {
	const { postId } = useParams();
	const {
		content,
		userNickname,
		createdAt,
		userProfileImage,
		commentId,
		owner,
		commentAlarmEnabled,
	} = comment;
	const [showMenu, setShowMenu] = useState(false);
	const [update, setUpdate] = useState(false);
	const [userInput, setUserInput] = useState('');
	const nav = useNavigate();

	const { data: userImg } = useGetNicknameImg(userNickname, userProfileImage);
	const { mutate } = useDeleteComment(postId);
	const { mutate: patchMutate } = usePatchComment(postId);
	const { mutate: alarmMutate } = usePatchAlarmComment(postId);

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
			icon: commentAlarmEnabled ? <FaRegBellSlash /> : <FaRegBell />,
			message: commentAlarmEnabled ? '알림 끄기' : '알람 켜기',
			onClick: () => {
				setShowMenu(false);
				alarmMutate({
					commentId,
					enable: !commentAlarmEnabled,
				});
			},
		},
	];

	const commentItems = [
		{
			icon: <BiSolidMessageRounded />,
			message: '채팅하기',
			onClick: () => {
				setShowMenu(false);
				nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}`);
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
					<S.CommentInputContainer onSubmit={handleUpdate}>
						<S.CommentEditInput
							placeholder={content}
							type="text"
							value={userInput}
							onChange={e => setUserInput(e.target.value)}
						/>
						<CustomButton
							label={<p>수정하기</p>}
							disabled={userInput === ''}
							onClick={handleUpdate}
							btnType="primary"
						/>
					</S.CommentInputContainer>
				) : (
					<div>{content}</div>
				)}
			</S.Board>
		</S.Container>
	);
};

export default Comment;
