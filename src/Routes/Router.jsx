import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LoginPage from "../Pages/Login";
import ForgetPassword from "../Pages/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword";
import Signup from "../Pages/Signup";
import EmailVerification from "../Pages/EmailVerification";

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/email-verification",
        element: <EmailVerification />,
      },
    ],
  },
]);
