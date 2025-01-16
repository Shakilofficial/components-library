import ForgetPassword from "@/pages/auth/ForgetPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ResetPassword from "@/pages/auth/ResetPassword";

export const authPaths = [
  {
    name: "login",
    path: "/auth/login",
    element: <Login />,
  },
  {
    name: "register",
    path: "/auth/register",
    element: <Register />,
  },
  {
    name: "forget-password",
    path: "/auth/forget-password",
    element: <ForgetPassword />,
  },
  {
    name: "reset-password",
    path: "/auth/reset-password",
    element: <ResetPassword />,
  },
];
