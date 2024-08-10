import { Dropdown } from '../../components';
import * as S from './PhotoMainPage.style';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import pictureData from '../../mockdata/db.json';
import { useState } from 'react';
import PhotoPostModal from './components/PhotoPostModal';
import CustomCalendar from '../../components/common/calendar/CustomCalendar';
import useCalendarStore from '../../store/useCalendarStore';
import useGetFamilyList from '../../hooks/queries/family/useGetFamilyList';
import useGetAlbum from '../../hooks/queries/album/useGetAlbum';
import useGetFamilySpaceID from '../../hooks/queries/family/useGetFamilySpaceID';
import useGetAlbumPost from '../../hooks/queries/album/useGetAlbumPost';
import useGetRealAlbum from '../../hooks/queries/album/useGetRealAlbum';

const PhotoMainPage = () => {
	const { data: familyListData } = useGetFamilyList();
	const options =
		familyListData?.familyDataList?.map(family => family.name) || [];

	//드롭다운 선택
	const [selectedOp, setSelectedOp] = useState('');
	const [taggedId, setTaggedId] = useState([]);
	const handleSelect = op => {
		const selectedFamily = familyListData?.familyDataList?.find(
			family => family.name === op,
		);
		const selectedId = selectedFamily?.userId;
		setSelectedOp(op);
		if (selectedId && !taggedId.includes(selectedId)) {
			setTaggedId([selectedId]);
		}
	};

	//날짜 선택
	const { date } = useCalendarStore();
	let selectedDate = '';
	if (date) {
		const tempDate = new Date(date);

		if (!isNaN(tempDate.getTime())) {
			const kstDate = new Date(tempDate.getTime() + 9 * 60 * 60 * 1000);
			selectedDate = kstDate.toISOString().split('T')[0];
		}
	}
	console.log(selectedDate);

	const { data: familySpaceIdData } = useGetFamilySpaceID();
	const familySpaceId = familySpaceIdData?.familySpaceId;

	//앨범 가져오기
	const { data: albumData = [] } = useGetAlbum(2, selectedDate, taggedId);
	console.log(albumData);

	//presigned url로 변환
	const imageQueries = useGetRealAlbum(albumData || []);
	const imageUrls = imageQueries.map(query => query.data?.result.url || '');

	const [openPost, setOpenPost] = useState(false);
	const [selectedPicture, setSelectPicture] = useState(null);

	const handleOpenPost = picture => {
		setSelectPicture(picture);
		console.log(picture);
		setOpenPost(true);
	};

	const handleClosePost = () => {
		setOpenPost(false);
		setSelectPicture(null);
	};

	const getProfileImageUrl = op => {
		const profile = pictureData.profiles.find(profile => profile.op === op);
		return profile ? profile.profile_img : '';
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
					albumData.map((picture, index) => (
						<S.PictureArea key={picture.postId}>
							<S.Picture
								src={imageUrls[index] || ''}
								onClick={() => handleOpenPost(picture)}
							/>
						</S.PictureArea>
					))}
				{/* {filteredPicture.map(picture => (
					<S.PictureArea key={picture.id}>
						<S.Picture
							src={picture.img}
							onClick={() => {
								handleOpenPost(picture);
							}}
						/>
					</S.PictureArea>
				))} */}
			</S.AlbumContainer>
			{openPost && selectedPicture && (
				<PhotoPostModal
					op={selectedPicture.op}
					date={selectedPicture.date}
					comment={selectedPicture.comment}
					img={selectedPicture.img}
					onClose={handleClosePost}
					avatar={getProfileImageUrl(selectedPicture.op)}
					goPostDetail={goPostDetail}
				/>
			)}
		</S.MainContainer>
	);
};

export default PhotoMainPage;
