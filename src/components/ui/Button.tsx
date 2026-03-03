import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200";

  const variants = {
    primary: "bg-volta-blue text-white hover:bg-volta-blue-hover shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-volta-blue border-2 border-volta-blue hover:bg-volta-blue-light",
    ghost: "text-volta-blue hover:bg-volta-blue-light",
    white: "bg-white text-volta-blue hover:bg-volta-gray-100 shadow-sm",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
