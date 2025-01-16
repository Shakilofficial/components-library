import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
  user?: {
    name: string;
    email: string;
    image?: string;
  };
}
const MainLayout = ({ children, user }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col px-4 md:px-8 lg:px-16">
      <Navbar user={user} />
      <main className="flex-1 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
