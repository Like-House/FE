import * as S from './PhotoMainPage.style';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useState } from 'react';

import PhotoPostModal from '@/pages/photo/components/PhotoPostModal.jsx';
import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import { Dropdown } from '@/components';

import useGetFamilyList from '@/hooks/queries/family/useGetFamilyList';
import useGetAlbum from '@/hooks/queries/album/useGetAlbum';
import useGetFamilySpaceId from '@/hooks/queries/family/useGetFamilySpaceId';
import useGetAlbumPost from '@/hooks/queries/album/useGetAlbumPost';
import useGetRealAlbum from '@/hooks/queries/album/useGetRealAlbum';
import useGetModalImage from '@/hooks/queries/album/useGetModalImage';
import useCalendarStore from '@/store/useCalendarStore';

const PhotoMainPage = () => {
	const { data: familyListData } = useGetFamilyList();
	const options =
		familyListData?.familyDataList?.map(family => family.name) || [];

	//드롭다운 선택
	const [taggedId, setTaggedId] = useState([]);
	const handleSelect = op => {
		const selectedFamily = familyListData?.familyDataList?.find(
			family => family.name === op,
		);
		const selectedId = selectedFamily?.userId;
		if (selectedId && !taggedId.includes(selectedId)) {
			setTaggedId([selectedId]);
		}
	};

	//날짜 선택
	const { date } = useCalendarStore();
	let selectedDate = '';
	if (date) {
		selectedDate = date.split('T')[0];
	}

	const { data: familySpaceIdData } = useGetFamilySpaceId();
	const familySpaceId = familySpaceIdData?.familySpaceId;

	//앨범 가져오기
	const { data: albumData = [] } = useGetAlbum(
		familySpaceId,
		selectedDate,
		taggedId,
	);

	//presigned url로 변환
	const { data: imageUrlsData } = useGetRealAlbum({ albumData });
	console.log('데이터 왔다잉', imageUrlsData);
	const imageUrls = imageUrlsData?.presignedUrlDownLoadResponseLists || [];
	console.log('마지막이다 ㅅㅂ', imageUrls);

	//모달창 관리
	const [openPost, setOpenPost] = useState(false);
	const [selectedPostId, setSelectedPostid] = useState();

	const handleOpenPost = picture => {
		setSelectedPostid(picture.postId);
		setOpenPost(true);
	};

	//앨범 클릭 api 통신
	const { data: postData } = useGetAlbumPost(selectedPostId);

	const [postImageUrl, avatarUrl] = [
		postData?.imageUrls[0],
		postData?.profileImage,
	];

	const { data: realImageUrl } = useGetModalImage(
		{ imageUrl: postImageUrl } || '',
	);

	const { data: realProfileUrl } = useGetModalImage(
		{ imageUrl: avatarUrl } || '',
	);

	const convertToKST = utcDate => {
		const kstDate = new Date(new Date(utcDate).getTime() + 9 * 60 * 60 * 1000);
		return `${kstDate.getFullYear()}년 ${kstDate.getMonth() + 1}월 ${kstDate.getDate()}일`;
	};

	const postDate = convertToKST(postData?.createdAt);

	const handleClosePost = () => {
		setOpenPost(false);
		setSelectedPostid(null);
	};

	const goPostDetail = () => {
		console.log('게시물 확인할게여');
	};

	return (
		<S.MainContainer>
			<S.SideContainer>
				<S.Title>가족 앨범 보기</S.Title>
				<S.SideContainerWrapper>
					<S.CalenderLabel>날짜 선택</S.CalenderLabel>
					<S.CalendarContainer>
						<CustomCalendar size="BASE" hasBackgroundColor={true} />
					</S.CalendarContainer>
					<S.DropdownWrapper>
						<S.DropdownLabel>가족 선택</S.DropdownLabel>
						<Dropdown
							label="보고싶은 가족을 선택해주세요."
							options={options}
							openIcon={<RiArrowDropDownLine />}
							closeIcon={<RiArrowDropUpLine />}
							onSelect={handleSelect}
						/>
					</S.DropdownWrapper>
				</S.SideContainerWrapper>
			</S.SideContainer>

			<S.AlbumContainer>
				{Array.isArray(albumData) &&
					albumData.map((picture, index) => {
						const imageUrl = imageUrls[index]?.url || '';
						return (
							<S.PictureArea key={picture.postId}>
								<S.Picture
									src={imageUrl}
									onClick={() => handleOpenPost(picture)}
								/>
							</S.PictureArea>
						);
					})}
			</S.AlbumContainer>
			{openPost && postData && (
				<PhotoPostModal
					op={postData.authorNickname}
					date={postDate}
					comment={postData.content}
					img={realImageUrl?.result.url}
					onClose={handleClosePost}
					avatar={realProfileUrl?.result.url}
					goPostDetail={goPostDetail}
				/>
			)}
		</S.MainContainer>
	);
};

export default PhotoMainPage;
