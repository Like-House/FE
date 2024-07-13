import { NavLink } from 'react-router-dom';
import * as S from './Sidebar.style';
import { TbHome } from 'react-icons/tb';
import { FaPen } from 'react-icons/fa6';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import Profile from '../../../assets/images/profile.png';
import { PAGE_PATH } from '../../../constants/path';

const Sidebar = () => {
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
						<FaPen size={18} />
					</S.IconRound>
				</NavLink>
			</S.NavContainer>

			<S.Profile>
				<img src={Profile} />
			</S.Profile>
		</S.Container>
	);
};

export default Sidebar;
