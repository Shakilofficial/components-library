import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "./verifyToken";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  const user = verifyToken(token);

  if (user.role === "admin") {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  if (user.role === "student") {
    return <MainLayout>{children}</MainLayout>;
  }

  // Redirect to login if the role is invalid or missing
  return <Navigate to="/auth/login" replace={true} />;
};

export default ProtectedRoute;
