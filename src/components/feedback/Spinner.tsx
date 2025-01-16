import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
}

const Spinner = ({ size = "default", className, ...props }: SpinnerProps) => {
  return (
    <div
      role="status"
      className={cn(
        "animate-spin text-muted-foreground/30",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "default",
          "h-8 w-8": size === "lg",
          "h-12 w-12": size === "xl",
        },
        className
      )}
      {...props}
    >
      <Loader2 className="h-full w-full" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
