import * as S from './AlertMainPage.style';

import { useState } from 'react';

import CustomCalendar from '@/components/common/calendar/CustomCalendar';
import AlertBox from '@/components/alertbox/AlertBox.jsx';

import Messenger from '@/assets/images/messenger.png';
import Calendar from '@/assets/images/calendar.png';

import useGetFamilySpaceId from '@/hooks/queries/family/useGetFamilySpaceId';
import useGetAlert from '@/hooks/queries/alert/useGetAlert';

const AlertMainPage = () => {
	const iconMap = {
		chat: Messenger,
		event: Calendar,
		post: Messenger,
	};

	const { data: familySpaceIdData } = useGetFamilySpaceId();
	const familySpaceId = familySpaceIdData?.familySpaceId;

	const { data: AllNotification } = useGetAlert({
		familySpaceId: familySpaceId,
		notificationRequestType: 'ALL',
		cursor: 1,
		take: 20,
	});

	const { data: PostNotification } = useGetAlert({
		familySpaceId: familySpaceId,
		notificationRequestType: 'POST',
		cursor: 1,
		take: 20,
	});

	const { data: ScheduleNotification } = useGetAlert({
		familySpaceId: familySpaceId,
		notificationRequestType: 'SCHEDULE',
		cursor: 1,
		take: 20,
	});

	const { data: ChatNotification } = useGetAlert({
		familySpaceId: familySpaceId,
		notificationRequestType: 'CHAT',
		cursor: 1,
		take: 20,
	});

	const mapNotificationData = (notificationData, type) => {
		if (!notificationData) return [];

		return notificationData.notificationResponseDTOList.map((item, index) => ({
			id: item.id,
			user: item.sender,
			message: item.content,
			date: item.createAt,
			icon: iconMap[type],
			key: index,
		}));
	};

	const allAlerts = mapNotificationData(AllNotification, 'all');
	const postAlerts = mapNotificationData(PostNotification, 'post');
	const scheduleAlerts = mapNotificationData(ScheduleNotification, 'event');
	const chatAlerts = mapNotificationData(ChatNotification, 'chat');

	const [activeTab, setActiveTab] = useState('전체');
	const menuList = ['전체', '채팅', '일정', '게시글'];

	const handleTabClick = menu => {
		setActiveTab(menu);
	};

	const getNotificationCount = menu => {
		switch (menu) {
			case '채팅':
				return chatAlerts.length;
			case '일정':
				return scheduleAlerts.length;
			case '게시글':
				return postAlerts.length;
			default:
				return allAlerts.length;
		}
	};

	const renderAlerts = type => {
		let alerts = [];
		switch (type) {
			case 'chat':
				alerts = chatAlerts;
				break;
			case 'event':
				alerts = scheduleAlerts;
				break;
			case 'post':
				alerts = postAlerts;
				break;
			default:
				alerts = [...chatAlerts, ...scheduleAlerts, ...postAlerts];
				break;
		}

		return alerts
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.map(alert => (
				<AlertBox
					key={alert.key}
					id={alert.id}
					user={alert.user}
					message={alert.message}
					date={alert.date}
					icon={alert.icon}
				/>
			));
	};

	const renderTabContent = () => {
		if (activeTab === '전체') {
			return (
				<>
					{renderAlerts('chat')}
					{renderAlerts('event')}
					{renderAlerts('post')}
				</>
			);
		}
		const typeMap = {
			채팅: 'chat',
			일정: 'event',
			게시글: 'post',
		};
		return renderAlerts(typeMap[activeTab]);
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
							{
								<S.NotificationCount>
									{getNotificationCount(menu)}
								</S.NotificationCount>
							}
						</S.TabBarMenu>
					))}
				</S.TabBarContainer>
				<S.ContentContainer>{renderTabContent()}</S.ContentContainer>
			</S.AlertConatainer>
			<S.SideContainer>
				<CustomCalendar size="BASE" hasBackgroundColor={true} />
			</S.SideContainer>
		</S.MainContainer>
	);
};

export default AlertMainPage;
