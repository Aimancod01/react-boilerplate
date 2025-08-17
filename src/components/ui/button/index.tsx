import type { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { Spinner } from "../loader/spinner";

type ButtonProps = {
  title?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  title,
  icon,
  rightIcon,
  loading = false,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<typeof variant, string> = {
    primary: "bg-primary text-white shadow-md hover:bg-primary/90",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes: Record<typeof size, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {loading ? (
        <Spinner size="sm" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}

      {title && <span>{title}</span>}

      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
