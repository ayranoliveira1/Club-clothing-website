"use client";

import { InputHTMLAttributes } from "react";
import { CustomInputContainer } from "./style";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const CustomInput = ({ hasError, ...rest }: CustomInputProps) => {
  return <CustomInputContainer hasError={hasError} {...rest} />;
};

export default CustomInput;