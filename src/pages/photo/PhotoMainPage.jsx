import { Dropdown } from '../../components';
import * as S from './PhotoMainPage.style';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import pictureData from '../../mockdata/db.json';
import { useState, useEffect, useRef } from 'react';
import { RESPONSIVE_SIZE } from '../../constants/size';
import PhotoPostModal from './components/PhotoPostModal';

const PhotoMainPage = () => {
	const options = Array.from(
		new Set(pictureData.pictures.map(picture => picture.op)),
	);

	const [selectedOp, setSelectedOp] = useState('');
	const [showSideContent, setShowSideContent] = useState(true);
	const sideContainerRef = useRef(null);

	const handleSelect = op => {
		setSelectedOp(op);
	};

	const filteredPicture = pictureData.pictures.filter(picture => {
		return !selectedOp || picture.op === selectedOp;
	});

	const handleClickOutside = event => {
		if (
			sideContainerRef.current &&
			!sideContainerRef.current.contains(event.target) &&
			!event.target.closest('button')
		) {
			setShowSideContent(false);
		}
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			`(max-width: ${RESPONSIVE_SIZE.TABLET})`,
		);

		const handleMediaQueryChange = event => {
			if (event.matches) {
				document.addEventListener('click', handleClickOutside, true);
			} else {
				document.removeEventListener('click', handleClickOutside, true);
				setShowSideContent(true);
			}
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		if (mediaQuery.matches) {
			document.addEventListener('click', handleClickOutside, true);
		}

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

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

	return (
		<S.MainContainer>
			<S.SideContainer ref={sideContainerRef} show={showSideContent}>
				<S.Title>가족 앨범 보기</S.Title>
				<S.CalenderLabel>날짜 선택</S.CalenderLabel>
				<S.CalendarContainer show={showSideContent}></S.CalendarContainer>
				<S.DropdownLabel>가족 선택</S.DropdownLabel>
				<S.DropdownWrapper>
					<Dropdown
						label="보고싶은 가족을 선택해주세요."
						options={options}
						openIcon={<RiArrowDropDownLine />}
						closeIcon={<RiArrowDropUpLine />}
						onSelect={handleSelect}
					/>
				</S.DropdownWrapper>
			</S.SideContainer>
			<S.ToggleButton onClick={() => setShowSideContent(!showSideContent)}>
				{showSideContent ? 'Close' : 'Open'}
			</S.ToggleButton>
			<S.AlbumContainer show={showSideContent}>
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
				/>
			)}
		</S.MainContainer>
	);
};

export default PhotoMainPage;
