import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import UserProfile from "../UserProfile";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo className="mr-4 flex-none" />
        <div className="flex-1 flex justify-center">
          <NavItems className="hidden md:flex" />
        </div>
        <div className="flex-none flex items-center space-x-4">
          <ThemeToggle />
          <UserProfile user={user} />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="mt-6 text-center">User Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate through the available pages.
              </SheetDescription>
              <div className="mt-6 flex flex-col space-y-2 my-10">
                <NavItems className="flex flex-col space-y-3" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
