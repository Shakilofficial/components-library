import MainLayout from "@/layouts/MainLayout";
import { routeGenerator } from "@/utils/routeGenerator";
import { createBrowserRouter } from "react-router-dom";
import { UserPaths } from "./UserRutes";
import DashboardLayout from "@/layouts/DashboardLayout";
import { AdminPaths } from "./AdminRoutes";

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
  /* 
    {
      path: '/auth',
      element: <AuthLayout />,
      children: routeGenerator(facultyPaths),
    }, */
]);

export default router;
