import Dashboard from "@/pages/admin/Dashboard";
import Products from "@/pages/admin/Products";
import Settings from "@/pages/admin/Settings";
import Users from "@/pages/admin/Users";

export const AdminPaths = [
  {
    name: "dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    name: "users",
    path: "/dashboard/users",
    element: <Users />,
  },
  {
    name: "products",
    path: "/dashboard/products",
    element: <Products />,
  },
  {
    name: "analytics",
    path: "/dashboard/analytics",
    element: <Products />,
  },
  {
    name: "settings",
    path: "/dashboard/settings",
    element: <Settings />,
  },
];
