import { Dropdown } from '../../components';
import * as S from './PhotoMainPage.style';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import pictureData from '../../mockdata/db.json';
import { useState } from 'react';
import PhotoPostModal from './components/PhotoPostModal';
import CustomCalendar from '../../components/common/calendar/CustomCalendar';
import useCalendarStore from '../../store/useCalendarStore';
import useGetFamilyList from '../../hooks/queries/family/useGetFamilyList';

const PhotoMainPage = () => {
	const { data } = useGetFamilyList();
	const options = data?.familyDataList?.map(family => family.name) || [];

	const [selectedOp, setSelectedOp] = useState('');
	const { date } = useCalendarStore();

	console.log(date);

	const handleSelect = op => {
		setSelectedOp(op);
	};

	const filteredPicture = pictureData.pictures.filter(picture => {
		const selectedDate = date ? new Date(date).toDateString() : null;
		const pictureDate = new Date(picture.date).toDateString();

		return (
			(!selectedOp || picture.op === selectedOp) &&
			(!selectedDate || selectedDate === pictureDate)
		);
	});

	const [openPost, setOpenPost] = useState(false);
	const [selectedPicture, setSelectPicture] = useState(null);

	const handleOpenPost = picture => {
		setSelectPicture(picture);
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
				{filteredPicture.map(picture => (
					<S.PictureArea key={picture.id}>
						<S.Picture
							src={picture.img}
							onClick={() => {
								handleOpenPost(picture);
							}}
						/>
					</S.PictureArea>
				))}
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
