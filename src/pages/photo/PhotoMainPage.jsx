import { Dropdown } from '../../components';
import * as S from './PhotoMainPage.style';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import pictureData from '../../mockdata/db.json';
import { useState } from 'react';

const PhotoMainPage = () => {
	const options = Array.from(
		new Set(pictureData.pictures.map(picture => picture.op)),
	);
	
	return (
		<S.MainContainer>
			<S.SideContainer>
				<S.Title>가족 앨범 보기</S.Title>
				<S.CalenderLabel>날짜 선택</S.CalenderLabel>
				<S.CalendarContainer></S.CalendarContainer>
				<S.DropdownLabel>가족 선택</S.DropdownLabel>
				<S.DropdownWrapper>
					<Dropdown
						label="보고싶은 가족을 선택해주세요."
						options={options}
						openIcon={<RiArrowDropDownLine />}
						closeIcon={<RiArrowDropUpLine />}
					/>
				</S.DropdownWrapper>
			</S.SideContainer>
			<S.AlbumContainer>asdf</S.AlbumContainer>
		</S.MainContainer>
	);
};

export default PhotoMainPage;
