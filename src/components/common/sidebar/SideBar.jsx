import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as S from './SideBar.style.js';
import { TbHome } from 'react-icons/tb';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import Profile from '../../../assets/images/profile.png';
import settingIcon from '../../../assets/images/settingIcon.svg';
import { PAGE_PATH } from '../../../constants/path';
import { useState } from 'react';
import PostModal from '../modal/PostModal.jsx';
import Dropdown from '../../common/dropdown/Dropdown.jsx';
import useCustomModal from '../../../hooks/useCustomModal.js';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import theme from '../../../theme/theme.js';
import { Avatar, Tooltip, FloatingButton } from '../../';
import LOGO from '../../../assets/images/likeHouseLogo.svg';
import MORE from '../../../assets/images/moreBox.svg';

const Sidebar = () => {
  const { pathname } = useLocation();
	const nav = useNavigate();
	const { isOpen, openModal, closeModal } = useCustomModal();
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState('');

	const handleLeftButtonClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRightButtonClick = () => {
	if (step === 1 && inputValue.trim() === '') {
	  return;
	} else {
		setStep(step + 1);
	}
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

	const body = [
    <textarea
      value={inputValue}
      onChange={handleInputChange}
      placeholder='내용을 입력해주세요.'/>,
    <Dropdown
			label={"누구와 관련이 있나요?"}
			options={['엄마','아빠','동생']}
			openIcon={<RiArrowDropDownLine size={'30px'}/>}
			closeIcon={<RiArrowDropUpLine size={'30px'}/>}
		/>,
  ];

	const totalSteps = 2;

	return (
		<S.Container>
			<S.Logo src={LOGO} />
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
								onClick={openModal}
								backgroundColor={theme.COLOR.YELLOW.YELLOW_500}
								borderColor={theme.COLOR.YELLOW.YELLOW_500}
								size="sm"
							/>
						)}
					</Tooltip>
				</S.PostIcon>

				<S.Profile>
					<Avatar
						src={Profile}
						onClick={() =>
							nav(
								`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}/${PAGE_PATH.EDIT_PROFILE}`,
							)
						}
					/>
				</S.Profile>
			</S.ButtonBox>
		</S.Container>
	);
};

export default Sidebar;
