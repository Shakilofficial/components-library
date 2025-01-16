import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

interface LoadingProps {
  text?: string;
  size?: "sm" | "default" | "lg" | "xl";
  textPosition?: "left" | "right" | "top" | "bottom";
  className?: string;
}

const Loading = ({
  size = "default",
  text = "Loading...",
  textPosition = "bottom",
  className,
  ...props
}: LoadingProps) => {
  return (
    <div
      role="status"
      className={cn(
        "flex items-center justify-center",
        {
          "flex-col": textPosition === "bottom" || textPosition === "top",
          "flex-col-reverse": textPosition === "top",
          "flex-row gap-3": textPosition === "right",
          "gap-2": textPosition !== "right",
        },
        className
      )}
      {...props}
    >
      <Spinner size={size} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default Loading;
