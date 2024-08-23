import * as S from './PostItem.style';

import useGetImageUrls from '@/hooks/queries/image/useGetImageUrls';
import useGetNicknameImg from '@/hooks/queries/posts/useGetNicknameImg';
import NoImg from '@/assets/images/profile.webp';
import { HiMiniEllipsisHorizontal } from 'react-icons/hi2';
import { FaEdit, FaTrashAlt, FaRegBellSlash, FaRegBell } from 'react-icons/fa';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { formatDate } from '@/utils';
import { Avatar } from '@/components';
import { useState } from 'react';
import useDeletePost from '@/hooks/queries/posts/useDeletePost';
import useLikePost from '@/hooks/queries/posts/useLikePost';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '@/constants';
import PatchModal from '../post/patchmodal/PatchModal';
import usePutAlarmPost from '@/hooks/queries/posts/usePutAlarmPost';
import NewPopover from '../common/newPopover/NewPopover';

const PostItem = ({ post }) => {
	const {
		postId,
		likeCount,
		commentCount,
		authorNickname,
		content,
		imageUrls,
		profileImage,
		createdAt,
		owner,
		postAlarmEnabled,
	} = post;
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const nav = useNavigate();
	const { pathname } = useLocation();

	const { data } = useGetImageUrls(postId, imageUrls);
	const { data: userImg } = useGetNicknameImg(authorNickname, profileImage);
	const { mutate: deletePost } = useDeletePost();
	const { mutate: likeMutate } = useLikePost(postId);
	const { mutate: alarmMutate } = usePutAlarmPost();

	const ownerMenuItems = [
		{
			icon: <FaEdit />,
			message: '수정하기',
			onClick: () => {
				setShowMenu(false);
				setShowModal(prev => !prev);
			},
		},
		{
			icon: <FaTrashAlt />,
			message: '삭제하기',
			onClick: () => {
				setShowMenu(false);
				deletePost(postId);
			},
		},
		{
			icon: postAlarmEnabled ? <FaRegBellSlash /> : <FaRegBell />,
			message: postAlarmEnabled ? '알림 끄기' : '알람 켜기',
			onClick: () => {
				setShowMenu(false);
				alarmMutate({
					postId,
					enable: !postAlarmEnabled,
				});
			},
		},
	];

	const menuItems = [
		{
			icon: <BiSolidMessageRounded />,
			message: '채팅하기',
			onClick: () => {
				setShowMenu(false);
				nav(`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}`);
			},
		},
	];

	const handleMouseLeave = () => {
		setShowMenu(false);
	};

	const handleLike = () => {
		likeMutate(postId);
	};

	const handleDetail = () => {
		!showMenu && nav(`${PAGE_PATH.HOME}/${PAGE_PATH.DETAILPOST}/${postId}`);
	};

	const onClose = () => {
		setShowModal(false);
	};

	return (
		<S.PostItem $pathname={pathname} $showMenu={showMenu}>
			{showModal && (
				<PatchModal
					onClose={onClose}
					postId={postId}
					avatar={profileImage ? userImg : NoImg}
				/>
			)}
			<S.PostWrapper>
				<S.Profile>
					<Avatar src={profileImage ? userImg : NoImg} />
				</S.Profile>
				<S.Board>
					<S.PostHeader>
						<S.AuthorWrapper>
							<S.Author>{authorNickname}</S.Author>
							<S.DateTime>{formatDate(createdAt)}</S.DateTime>
						</S.AuthorWrapper>
						<S.MenuButton>
							<NewPopover
								items={owner ? ownerMenuItems : menuItems}
								onMouseLeave={handleMouseLeave}
								showMenu={showMenu}
							>
								<HiMiniEllipsisHorizontal
									onClick={e => {
										e.stopPropagation();
										setShowMenu(prev => !prev);
									}}
								/>
							</NewPopover>
						</S.MenuButton>
					</S.PostHeader>
					<S.Content onClick={handleDetail}>{content}</S.Content>
					{data?.presignedUrlDownLoadResponseLists.map((e, idx) => (
						<S.Photo
							src={e.url}
							alt="post photo"
							key={idx}
							onClick={handleDetail}
						/>
					))}
					<S.Footer>
						<p onClick={handleLike}>좋아요 {likeCount}</p>
						<p onClick={handleDetail}>댓글 {commentCount}</p>
					</S.Footer>
				</S.Board>
			</S.PostWrapper>
			<S.Divider />
		</S.PostItem>
	);
};

export default PostItem;
