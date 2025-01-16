import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
}
const MainLayout = ({ user }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
      <Navbar user={user} />
      <main className="flex-1 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
