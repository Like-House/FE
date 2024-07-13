import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { PAGE_PATH } from "./constants/path";
import { LoginPage, MainPage, SignupPage } from "./pages";
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
