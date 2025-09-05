// components/common/Button.tsx
import React from "react";
import { cn } from "@/lib/utils"; // utility function for conditional classes (if you have one)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<typeof variant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
