import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserProfile from "@/components/UserProfile";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

interface DashboardHeaderProps {
  onMenuClick: () => void;
  user?: {
    name: string;
    email: string;
    image?: string;
  };
}

const Header = ({ onMenuClick, user }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="mr-4 hidden md:flex">
          <h3 className="text-lg font-bold">Dashboard</h3>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end px-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input placeholder="Search..." className="max-w-[300px]" />
          </div>
          <ThemeToggle />
          <UserProfile user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
