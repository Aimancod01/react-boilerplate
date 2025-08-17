import type { FC, InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import FieldWrapper from "./field-wrapper";

type InputProps = {
  label?: string;
  className?: string;
  error?: FieldError | undefined;
  registration: Partial<UseFormRegisterReturn>;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({
  label,
  error,
  registration,
  className,
  ...props
}) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        {...registration}
        {...props}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />
    </FieldWrapper>
  );
};

export default Input;
