import MainLayout from "@/layouts/MainLayout";
import { routeGenerator } from "@/utils/routeGenerator";
import { createBrowserRouter } from "react-router-dom";
import { UserPaths } from "./UserRutes";
import DashboardLayout from "@/layouts/DashboardLayout";
import { AdminPaths } from "./AdminRoutes";
import { authPaths } from "./AuthRoutes";
import AuthLayout from "@/layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeGenerator(UserPaths),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: routeGenerator(AdminPaths),
  },
  
    {
      path: '/auth',
      element: <AuthLayout />,
      children: routeGenerator(authPaths),
    },
]);

export default router;
