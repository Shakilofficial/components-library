import Header from "@/components/layout/dashboard/Header";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Outlet } from "react-router-dom";

interface DashboardLayoutProps {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
}

const DashboardLayout = ({ user }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen px-4 md:px-8 max-w-screen-2xl mx-auto overflow-hidden">
      <aside className="hidden w-64 md:flex">
        <Sidebar />
      </aside>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="mt-12">
            <SheetTitle>Dashboard Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Use the menu to navigate the dashboard.
            </SheetDescription>
          </SheetHeader>
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} user={user} />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
