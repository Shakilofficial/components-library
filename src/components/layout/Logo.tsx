import { cn } from "@/lib/utils";
import { Aperture } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      to="/"
      className={cn("flex items-center space-x-2 font-bold text-xl", className)}
    >
      <Aperture className="w-6 h-6" />
      <span>YourLogo</span>
    </Link>
  );
};

export default Logo;
