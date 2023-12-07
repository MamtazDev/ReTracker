import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LoginPage from "../Pages/Login";
import ForgetPassword from "../Pages/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);
