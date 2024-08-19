import * as S from './Comment.style';

import { formatDate } from '@/utils';
import { Avatar, PopOver } from '@/components';
import useGetNicknameImg from '@/hooks/queries/posts/useGetNicknameImg';
import NoImg from '@/assets/images/profile.webp';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { FaEdit, FaTrashAlt, FaRegBellSlash } from 'react-icons/fa';
import { useState } from 'react';

const Comment = ({ comment }) => {
	const { content, userNickname, createdAt, userProfileImage } = comment;
	const [showMenu, setShowMenu] = useState(false);

	const { data: userImg } = useGetNicknameImg(userNickname, userProfileImage);

	const handleMouseLeave = () => {
		setShowMenu(false);
	};

	const commentItems = [
		{
			icon: <FaEdit />,
			message: '댓글수정하기',
			onClick: () => {},
		},
		{
			icon: <FaTrashAlt />,
			message: '댓글삭제하기',
		},
		{
			icon: <FaRegBellSlash />,
			message: '알림끄기',
			onClick: () => {
				console.log('알림끄기 클릭됨');
			},
		},
	];

	console.log(userImg);
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
					<S.MenuButton>
						<HiMiniEllipsisHorizontal
							onClick={() => setShowMenu(prev => !prev)}
						/>

						{showMenu && (
							<S.Popover>
								<PopOver items={commentItems} onMouseLeave={handleMouseLeave} />
							</S.Popover>
						)}
					</S.MenuButton>
				</S.PostHeader>
				<div>{content}</div>
			</S.Board>
		</S.Container>
	);
};

export default Comment;
