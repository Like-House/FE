import { NavLink } from 'react-router-dom';
import * as S from './SideBar.style.js';
import { TbHome } from 'react-icons/tb';
import { FaPen } from 'react-icons/fa6';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import Profile from '../../../assets/images/profile.png';
import { PAGE_PATH } from '../../../constants/path';
import { useState } from 'react';
import PostModal from '../modal/PostModal.jsx';
import Dropdown from '../../common/dropdown/Dropdown.jsx';
import useCustomModal from '../../../hooks/useCustomModal.js';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Sidebar = () => {
	const { isOpen, openModal, closeModal } = useCustomModal();
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState('');

	const handleLeftButtonClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (step === totalSteps) {
      setStep(step + 1);
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
			<S.Logo>가족같은</S.Logo>
			<S.NavContainer>
				<NavLink to={PAGE_PATH.HOME}>
					<S.Icon>
						<TbHome size={28} />
					</S.Icon>
					<p>홈</p>
				</NavLink>
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
				<NavLink to={PAGE_PATH.FAMILY}>
					<S.Icon>
						<IoPersonOutline size={25} />
					</S.Icon>
					<p>가족</p>
				</NavLink>
				<NavLink to={PAGE_PATH.HOME} className="post">
					<S.IconRound>
						<FaPen size={18} onClick={openModal}/>
					</S.IconRound>
				</NavLink>
			</S.NavContainer>

			<S.Profile>
				<img src={Profile} />
			</S.Profile>

			<PostModal
        isOpen={isOpen}
        closeModal={closeModal}
        body={body}
        leftButton={['이전', '이전']}
        leftButtonAction={handleLeftButtonClick}
        rightButton={['다음', '제출']}
        rightButtonAction={handleRightButtonClick}
        totalSteps={totalSteps}
        currentStep={step}
      />
		</S.Container>
	);
};

export default Sidebar;
