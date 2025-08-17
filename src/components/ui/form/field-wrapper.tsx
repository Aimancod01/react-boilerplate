import type { FC } from "react";
import { type FieldError } from "react-hook-form";
import { Error } from "./error";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

const FieldWrapper: FC<FieldWrapperProps> = ({ label, error, children }) => {
  return (
    <div>
      <label>{label}</label>
      <div className="my-1">{children}</div>
      <Error errorMessage={error?.message} />
    </div>
  );
};

export default FieldWrapper;
