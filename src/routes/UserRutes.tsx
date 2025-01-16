import About from "@/pages/user/About";
import Contact from "@/pages/user/Contact";
import Home from "@/pages/user/Home";
import Service from "@/pages/user/Service";

export const UserPaths = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "service",
    path: "/services",
    element: <Service />,
  },
  {
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
];
