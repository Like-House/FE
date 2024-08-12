import * as S from './SideBar.style.js';

import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TbHome } from 'react-icons/tb';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import settingIcon from '@/assets/images/settingIcon.svg';
import {
	PostModal,
	Dropdown,
	Avatar,
	Tooltip,
	FloatingButton,
} from '@/components/index.js';

import theme from '@/theme/theme.js';
import LOGO from '@/assets/images/likeHouseLogo.svg';
import MORE from '@/assets/images/moreBox.svg';
import NOIMG from '@/assets/images/profile.webp';
import useGetProfile from '@/hooks/queries/user/useGetProfile.js';
import useGetUserImg from '@/hooks/queries/user/useGetUserImg.js';
import useCustomModal from '@/hooks/useCustomModal.js';
import useWritePosts from '@/hooks/queries/posts/useWritePosts.js';
import { PAGE_PATH } from '@/constants/path';
import useFamilySpaceId from '@/hooks/useFamilySpaceId.js';

const Sidebar = () => {
	const { pathname } = useLocation();
	const nav = useNavigate();
	const isSettingPage = pathname.includes(PAGE_PATH.SETTING);
	const { data: profile, isPending } = useGetProfile();
	const { data: userImg } = useGetUserImg(profile?.imageKeyName);
	const { mutate: writePost } = useWritePosts();
	const { data } = useFamilySpaceId();

	const noDisplay = pathname.startsWith(
		`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.ROOM}`,
	);
	const { isOpen, openModal, closeModal } = useCustomModal();
	const [step, setStep] = useState(1);
	const [inputValue, setInputValue] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

	const handleLeftButtonClick = () => {
		console.log("왼쪽버튼클릭");
		if (step === 0) {
			console.log(step);
			document.getElementById('file-input').click();
		} else if (step > 1) {
			setStep(step - 1);
		}
	};

	const handleRightButtonClick = () => {
		if (step === 1 && inputValue.trim() === '') {
			return;
		} else if (step === totalSteps) {
			const postData =
				{ 
					familySpaceId: data?.familySpaceId,
					content: inputValue,
					taggedUserIds: [
						{
							userId: 0,
							nickname: "사용자 닉네임"
						}
					],
					imageUrls: [
						"https://plus.unsplash.com/premium_photo-1723200799223-0095f042decb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
					]
				};
			console.log(postData);
			writePost(postData);
			closeModal();
		} else {
			setStep(step + 1);
		}
	};

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleOpenModal = () => {
		setInputValue('');
		setSelectedFile(null);
		openModal();
	}

	const body = [
		<textarea
			key="1"
			value={inputValue}
			onChange={handleInputChange}
			placeholder="내용을 입력해주세요."
		/>,
		<Dropdown
			key="2"
			label={'누구와 관련이 있나요?'}
			options={['엄마', '아빠', '동생']}
			openIcon={<RiArrowDropDownLine size={'30px'} />}
			closeIcon={<RiArrowDropUpLine size={'30px'} />}
		/>,
	];

	const totalSteps = 2;

	const handleProfile = () => {
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}/${PAGE_PATH.EDIT_PROFILE}`);
	};

	return (
		<S.Container $noDisplay={noDisplay} $isSettingPage={isSettingPage}>
			<S.Logo src={LOGO} onClick={() => nav('/')} />
			<S.NavContainer>
				<Link
					to={PAGE_PATH.HOME}
					className={pathname === PAGE_PATH.HOME ? 'active' : ''}
				>
					<S.Icon>
						<TbHome size={28} />
					</S.Icon>
					<p>홈</p>
				</Link>
				<NavLink to={PAGE_PATH.CALENDER}>
					<S.Icon>
						<LuCalendar size={25} />
					</S.Icon>
					<p>일정</p>
				</NavLink>
				<NavLink to={PAGE_PATH.ALERT}>
					<S.Icon>
						<GoBell size={25} />
					</S.Icon>
					<p>알림</p>
				</NavLink>
				<NavLink to={PAGE_PATH.CHAT}>
					<S.Icon>
						<TbMessageCircle2Filled size={25} />
					</S.Icon>
					<p>메세지</p>
				</NavLink>
				<PostModal
					isOpen={isOpen}
					closeModal={closeModal}
					body={body}
					leftButton={['사진첨부', '이전']}
					leftButtonAction={handleLeftButtonClick}
					rightButton={['다음', '제출']}
					rightButtonAction={handleRightButtonClick}
					totalSteps={totalSteps}
					currentStep={step}
				/>
				<S.PC>
					<NavLink to={PAGE_PATH.FAMILY}>
						<S.Icon>
							<IoPersonOutline size={25} />
						</S.Icon>
						<p>가족</p>
					</NavLink>
					<NavLink to={PAGE_PATH.SETTING}>
						<S.Icon>
							<img src={settingIcon} alt="setting" />
						</S.Icon>
						<p>설정</p>
					</NavLink>
				</S.PC>
				<S.Mobile>
					<NavLink to={PAGE_PATH.FAMILY}>
						<S.Icon>
							<img src={MORE} alt="more" />
						</S.Icon>
						<p>더보기</p>
					</NavLink>
				</S.Mobile>
			</S.NavContainer>
			<S.ButtonBox>
				<S.PostIcon>
					<Tooltip text="게시글 작성" size="sm">
						{pathname === PAGE_PATH.HOME && (
							<FloatingButton
								onClick={handleOpenModal}
								backgroundColor={theme.COLOR.YELLOW.YELLOW_500}
								borderColor={theme.COLOR.YELLOW.YELLOW_500}
								size="sm"
							/>
						)}
					</Tooltip>
				</S.PostIcon>
				<S.Profile>
					<Avatar
						src={isPending || !profile?.imageKeyName ? NOIMG : userImg?.url}
						onClick={handleProfile}
					/>
				</S.Profile>
			</S.ButtonBox>

			<input
				id="file-input"
				type="file"
				onChange={handleFileChange}
				style={{ display: 'none' }}
			/>
		</S.Container>
	);
};

export default Sidebar;
