import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
