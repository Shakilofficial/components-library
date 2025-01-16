import { cn } from "@/lib/utils";
import { Briefcase, Home, Info, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItemsProps {
  className?: string;
}

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: Info },
  { label: "Services", path: "/services", icon: Briefcase },
  { label: "Contact", path: "/contact", icon: Mail },
];

const NavItems = ({ className }: NavItemsProps) => {
  const { pathname } = useLocation();

  return (
    <nav className={cn("flex items-center space-x-1 lg:space-x-2", className)}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            pathname === item.path
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <item.icon className="w-4 h-4 mr-2" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
