import { Link, NavLink, useLocation } from 'react-router-dom';
import * as S from './SideBar.style.js';
import { TbHome } from 'react-icons/tb';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import Profile from '../../../assets/images/profile.png';
import settingIcon from '../../../assets/images/settingIcon.svg';
import { PAGE_PATH } from '../../../constants/path';
import FloatingButton from '../floatingbutton/floatingbutton';
import theme from '../../../theme/theme.js';
import Tooltip from '../tooltip/Tooltip.jsx';

const Sidebar = () => {
	const { pathname } = useLocation();

	return (
		<S.Container>
			<S.Logo>가족같은</S.Logo>
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
			</S.NavContainer>

			<S.ButtonBox>
				<S.PostIcon>
					<Tooltip text="게시글 작성" size="sm">
						{pathname === PAGE_PATH.HOME && (
							<FloatingButton
								onClick={() => console.log('post 모달 뜨우기')}
								backgroundColor={theme.COLOR.YELLOW.YELLOW_500}
								borderColor={theme.COLOR.YELLOW.YELLOW_500}
								size="sm"
							/>
						)}
					</Tooltip>
				</S.PostIcon>

				<S.Profile>
					<img src={Profile} />
				</S.Profile>
			</S.ButtonBox>
		</S.Container>
	);
};

export default Sidebar;
