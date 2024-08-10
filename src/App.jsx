import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PAGE_PATH } from './constants/path';
import {
	// MAIN
	LandingPage,
	// LOGIN (로그인 페이지)
	LoginPage,
	// SIGNUP (회원가입 페이지)
	SignupPage,
	// CHAT (채팅 페이지)
	ChatMainPage,
	ChatDetailPage,
	ChatImgPage,
	ChatUserInfo,
	// SETTING (세팅 페이지)
	ChangePassword,
	DeleteAccount,
	Logout,
	NotificationSettings,
	FamilySpaceSettings,
	MyPosts,
	FamilySettings,
	EditProfile,
	FamilyList,
	FamilyEdit,
	InvitationLink,
	// ALERT (알림 페이지)
	AlertMainPage,
	// CALENDAR (일정 페이지)
	CalenderMainPage,
	// HOME (홈 페이지)
	PhotoMainPage,
	MainPage,
	// QNA (QNA 페이지)
	QnaPage,
	// SERVICE (서비스 이용 페이지)
	ServiceMainPage,
	CreateSpace,
	// SCHEDULE (일정 페이지)
	AddSchedulePage,
} from './pages';

import { AuthLayout, HomeLayout } from './layout';

const router = createBrowserRouter([
	{
		path: `${PAGE_PATH.BASE}`,
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: `${PAGE_PATH.LOGIN}`,
				element: <LoginPage />,
			},
			{
				path: `${PAGE_PATH.SIGN_UP}`,
				element: <SignupPage />,
			},
			{
				path: `${PAGE_PATH.QNA}`,
				element: <QnaPage />,
			},
			{
				path: `${PAGE_PATH.SERVICE}/*`,

				children: [
					{
						index: true,
						element: <ServiceMainPage />,
					},
					{
						path: `${PAGE_PATH.SERVICE_INVITATION_LINK}`,
						element: <InvitationLink />,
					},
					{
						path: `${PAGE_PATH.CREATE_SPACE}`,
						element: <CreateSpace />,
					},
				],
			},
		],
	},
	{
		path: `${PAGE_PATH.HOME}`,
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: `${PAGE_PATH.ALERT}`,
				element: <AlertMainPage />,
			},
			{
				path: `${PAGE_PATH.CALENDER}`,
				element: <CalenderMainPage />,
			},
			{
				path: `${PAGE_PATH.CHAT}`,
				element: <ChatMainPage />,
				children: [
					{
						path: `${PAGE_PATH.ROOM}/:chatRoomId`,
						element: <ChatDetailPage />,
					},
					{
						path: `${PAGE_PATH.MODIFY}/:chatRoomId`,
						element: <ChatImgPage />,
					},
					{
						path: `${PAGE_PATH.INFO}/:chatRoomId`,
						element: <ChatUserInfo />,
					},
				],
			},
			{
				path: `${PAGE_PATH.FAMILY}/*`,
				children: [
					{ index: true, element: <FamilyList /> },
					{ path: `${PAGE_PATH.FAMILY_EDIT}`, element: <FamilyEdit /> },
				],
			},
			{
				path: `${PAGE_PATH.PHOTO}`,
				element: <PhotoMainPage />,
			},
			{
				path: `${PAGE_PATH.SETTING}/*`,
				children: [
					{ path: `${PAGE_PATH.MY_POSTS}`, element: <MyPosts /> },
					{
						path: `${PAGE_PATH.FAMILY_SPACE_SETTINGS}`,
						element: <FamilySpaceSettings />,
					},
					{ path: `${PAGE_PATH.EDIT_PROFILE}`, element: <EditProfile /> },
					{
						path: `${PAGE_PATH.FAMILY_SETTINGS}`,
						element: <FamilySettings />,
					},
					{ path: `${PAGE_PATH.DELETE_ACCOUNT}`, element: <DeleteAccount /> },
					{
						path: `${PAGE_PATH.NOTIFICATION_SETTINGS}`,
						element: <NotificationSettings />,
					},
					{ path: `${PAGE_PATH.LOGOUT}`, element: <Logout /> },
					{ path: `${PAGE_PATH.CHANGE_PASSWORD}`, element: <ChangePassword /> },
				],
			},
			{
				path: `${PAGE_PATH.CALENDER}${PAGE_PATH.ADD_SCHEDULE}`,
				element: <AddSchedulePage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
