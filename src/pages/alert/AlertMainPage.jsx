import * as S from './AlertMainPage.style';

import { useState } from 'react';

import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import AlertBox from '@/components/alertbox/AlertBox.jsx';

import Messenger from '@/assets/images/messenger.png';
import Calendar from '@/assets/images/calendar.png';
import alertData from '@/mockdata/db.json';

const AlertMainPage = () => {
	const iconMap = {
		chat: Messenger,
		event: Calendar,
		post: Messenger,
	};

	const [activeTab, setActiveTab] = useState('전체');
	const menuList = ['전체', '채팅', '일정', '게시글'];

	const handleTabClick = menu => {
		setActiveTab(menu);
	};

	const getNotificationItems = type => {
		const notification = alertData.notifications.find(
			notification => notification.type === type,
		);
		return notification ? notification.items : [];
	};

	const getNotificationCount = type => {
		const items = getNotificationItems(type);
		return items.length;
	};

	const renderAlerts = type => {
		const items = getNotificationItems(type);
		const icon = iconMap[type];
		const sortedItems = items.sort(
			(a, b) => new Date(b.date) - new Date(a.date),
		);

		return sortedItems.map(({ id, user, message, date }) => (
			<AlertBox
				key={id}
				id={id}
				user={user}
				message={message}
				date={date}
				icon={icon}
			/>
		));
	};

	return (
		<S.MainContainer>
			<S.AlertConatainer>
				<S.TabBarContainer>
					{menuList.map(menu => (
						<S.TabBarMenu
							key={menu}
							onClick={() => handleTabClick(menu)}
							$isActive={activeTab === menu}
						>
							{menu}
							{menu !== '전체' && (
								<S.NotificationCount>
									{getNotificationCount(
										menu === '채팅'
											? 'chat'
											: menu === '일정'
												? 'event'
												: 'post',
									)}
								</S.NotificationCount>
							)}
						</S.TabBarMenu>
					))}
				</S.TabBarContainer>
				<S.ContentContainer>
					{activeTab === '전체' && (
						<>
							{renderAlerts('chat')}
							{renderAlerts('event')}
							{renderAlerts('post')}
						</>
					)}
					{activeTab === '채팅' && renderAlerts('chat')}
					{activeTab === '일정' && renderAlerts('event')}
					{activeTab === '게시글' && renderAlerts('post')}
				</S.ContentContainer>
			</S.AlertConatainer>
			<S.SideContainer>
				<CustomCalendar size="BASE" hasBackgroundColor={true} />
			</S.SideContainer>
		</S.MainContainer>
	);
};

export default AlertMainPage;
