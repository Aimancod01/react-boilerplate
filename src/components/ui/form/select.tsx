import type { FC } from "react";
import FieldWrapper from "./field-wrapper";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../../utils/cn";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = {
  options: Option[];
  className?: string;
  defaultValue?: string;
  registration: Partial<UseFormRegisterReturn>;
  label?: string;
  error?: FieldError | undefined;
};

const Select: FC<SelectFieldProps> = ({
  className,
  options,
  defaultValue,
  registration,
  label,
  error,
}) => {
  return (
    <FieldWrapper label={label} error={error}>
      <select
        id={registration?.name}
        className={cn("mt-1 border w-full p-2 rounded outline-none", className)}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option
            key={label?.toString()}
            value={value}
            className="bg-white text-gray-700 hover:bg-blue-100"
          >
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export default Select;
