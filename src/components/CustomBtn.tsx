import { CustomBtnProps } from "../types/componnets";
import { CustomSpinner } from "./CustomSpinner";

export const CustomBtn = ({
  leftIcon,
  rightIcon,
  isDisabled = false,
  spinnerClass = "",
  children,
  ...props
}: CustomBtnProps) => {
  return (
    <button
      className={`flex items-center justify-center ${props.className}`}
      disabled={isDisabled}
      {...props}
    >
      {leftIcon && leftIcon}
      {isDisabled ? <CustomSpinner className={spinnerClass} /> : children}
      {rightIcon && rightIcon}
    </button>
  );
};
