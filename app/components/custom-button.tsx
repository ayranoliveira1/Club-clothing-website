import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  startIcon?: React.ReactNode;
}

const CustomButton = ({ children, startIcon, ...rest }: CustomButtonProps) => {
  return (
    <button
      {...rest}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#212529] p-[10px] text-sm font-semibold shadow-lg"
    >
      {startIcon && (
        <span className="flex h-full items-center">{startIcon}</span>
      )}

      {children}
    </button>
  );
};

export default CustomButton;
