import { cn } from "@/lib/utils";
interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Header = ({ title, subtitle, className }: HeaderProps) => {
  return (
    <div className={cn("text-center mb-12 relative", className)}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-1/2 top-0 h-[48rem] w-[80rem] -translate-x-1/2 stroke-gray-300/30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="doodle-pattern"
              patternUnits="userSpaceOnUse"
              width="200"
              height="200"
              patternTransform="translate(100 100) scale(1.1) rotate(40)"
            >
              <rect width="100%" height="100%" fill="none" />
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/30 animate-pulse"
                style={{ animationDelay: "0s" }}
              />
              <path
                d="M40 20 Q60 40 80 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-secondary/30 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <path
                d="M120 40 L140 60 L160 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent/30 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
              <rect
                x="180"
                y="60"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/30 animate-pulse"
                style={{ animationDelay: "0.6s" }}
              />
              <path
                d="M20 100 Q40 80 60 100 T100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-secondary/30 animate-pulse"
                style={{ animationDelay: "0.8s" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
        </svg>
      </div>
      <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-[85%] mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Header;
