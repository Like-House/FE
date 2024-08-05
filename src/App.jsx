import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PAGE_PATH } from './constants/path';
import {
	AlertMainPage,
	CalenderMainPage,
	ChatMainPage,
	FamilyMainPage,
	LandingPage,
	LoginPage,
	MainPage,
	PhotoMainPage,
	ServiceMainPage,
	SignupPage,
	FamilySpaceSettings,
	FamilySettings,
	EditProfile,
	ChatMessagePage,
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
				path: `${PAGE_PATH.SERVICE}`,
				element: <ServiceMainPage />,
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
			},
			{
				path: `${PAGE_PATH.FAMILY}`,
				element: <FamilyMainPage />,
			},
			{
				path: `${PAGE_PATH.PHOTO}`,
				element: <PhotoMainPage />,
			},
			{
				path: `${PAGE_PATH.SETTING}/*`,
				children: [
					{
						path: `${PAGE_PATH.FAMILY_SPACE_SETTINGS}`,
						element: <FamilySpaceSettings />,
					},
					{ path: `${PAGE_PATH.EDIT_PROFILE}`, element: <EditProfile /> },
					{
						path: `${PAGE_PATH.FAMILY_SETTINGS}`,
						element: <FamilySettings />,
					},
				],
			},
			{
				path: `${PAGE_PATH.CHAT}/${PAGE_PATH.CHAT_MESSAGE}/:chatRoomId`,
				element: <ChatMessagePage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
