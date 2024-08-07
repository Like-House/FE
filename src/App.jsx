import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PAGE_PATH } from './constants/path';
import {
  AlertMainPage,
  CalenderMainPage,
  ChatMainPage,
  LandingPage,
  LoginPage,
  MainPage,
  PhotoMainPage,
  QnaPage,
  ServiceMainPage,
  SignupPage,
  FamilySpaceSettings,
  FamilySettings,
  EditProfile,
  FamilyList,
  FamilyEdit,
} from './pages';

import { AuthLayout, HomeLayout } from './layout';
import { ErrorBoundaryProvider } from './container/ErrorBoundaryProvider.jsx';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
