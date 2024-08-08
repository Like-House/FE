import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as S from './SideBar.style.js';
import { TbHome } from 'react-icons/tb';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import settingIcon from '../../../assets/images/settingIcon.svg';
import { PAGE_PATH } from '../../../constants/path';
import theme from '../../../theme/theme.js';
import { Avatar, Tooltip, FloatingButton } from '../../';
import LOGO from '../../../assets/images/likeHouseLogo.svg';
import MORE from '../../../assets/images/moreBox.svg';
import NOIMG from '../../../assets/images/profile.webp';
import useGetProfile from '../../../hooks/queries/user/useGetProfile.js';
import useGetUserImg from '../../../hooks/queries/user/useGetUserImg.js';

const Sidebar = () => {
	const { pathname } = useLocation();
	const nav = useNavigate();
	const noDisplay = pathname.startsWith(
		`${PAGE_PATH.HOME}/${PAGE_PATH.CHAT}/${PAGE_PATH.ROOM}`,
	);
	const { data: profile, isPending } = useGetProfile();
	const { data: userImg } = useGetUserImg(profile?.imageKeyName);

	const handleProfile = () => {
		nav(`${PAGE_PATH.HOME}/${PAGE_PATH.SETTING}/${PAGE_PATH.EDIT_PROFILE}`);
	};


	return (
		<S.Container $noDisplay={noDisplay}>
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
								onClick={() => console.log('post 모달 뜨우기')}
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
		</S.Container>
	);
};

export default Sidebar;
