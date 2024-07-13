import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { PAGE_PATH } from "./constants/path";
import {
  AlertMainPage,
  CalenderMainPage,
  ChatMainPage,
  FamilyMainPage,
  LoginPage,
  MainPage,
  PhotoMainPage,
  PostMainPage,
  ServiceMainPage,
  SettingMainPage,
  SignupPage,
} from "./pages";
import { AuthLayout, HomeLayout } from "./layout";

const router = createBrowserRouter([
  {
    path: `${PAGE_PATH.BASE}`,
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
        path: `${PAGE_PATH.SERVICE}`,
        element: <ServiceMainPage />,
      },
      {
        path: `${PAGE_PATH.SETTING}`,
        element: <SettingMainPage />,
      },
    ],
  },
  {
    path: `${PAGE_PATH.AUTH}`,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: `${PAGE_PATH.LOGIN}`,
        element: <LoginPage />,
      },
      {
        path: `${PAGE_PATH.SIGN_UP}`,
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
