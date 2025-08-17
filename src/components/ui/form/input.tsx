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
          "flex h-10 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />
    </FieldWrapper>
  );
};

export default Input;
