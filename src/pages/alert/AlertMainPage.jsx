import * as S from './AlertMainPage.style';
import AlertBox from './components/alertbox/AlertBox';
import Messenger from '../../assets/images/messenger.png';
import Calendar from '../../assets/images/calendar.png';

const AlertMainPage = () => {
	const menuList = ['전체', '채팅', '일정', '게시글'];
	return (
		<S.MainContainer>
			<S.AlertConatainer>
				<S.TabBarContainer>
					{menuList.map(menu => (
						<S.TabBarMenu key={menu}>{menu}</S.TabBarMenu>
					))}
				</S.TabBarContainer>
				<S.ContentContainer>
					<AlertBox icon={Messenger} />
					<AlertBox icon={Calendar} />
					<AlertBox icon={Calendar} />
					<AlertBox icon={Calendar} />
					<AlertBox icon={Calendar} />
					<AlertBox icon={Calendar} />
					<AlertBox icon={Calendar} />
				</S.ContentContainer>
			</S.AlertConatainer>
			<S.SideContainer></S.SideContainer>
		</S.MainContainer>
	);
};

export default AlertMainPage;
