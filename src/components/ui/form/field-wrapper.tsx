import type { FC } from "react";
import { type FieldError } from "react-hook-form";
import { Error } from "./error";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  htmlFor?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

const FieldWrapper: FC<FieldWrapperProps> = ({
  label,
  error,
  children,
  htmlFor,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="my-1">{children}</div>
      <Error errorMessage={error?.message} />
    </div>
  );
};

export default FieldWrapper;
