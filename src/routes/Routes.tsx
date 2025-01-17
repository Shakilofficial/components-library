import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { routeGenerator } from "@/utils/routeGenerator";
import { createBrowserRouter } from "react-router-dom";
import { AdminPaths } from "./AdminRoutes";
import { authPaths } from "./AuthRoutes";
import { UserPaths } from "./UserRutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(UserPaths),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(AdminPaths),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: routeGenerator(authPaths),
  },
]);

export default router;
