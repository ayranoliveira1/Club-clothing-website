"use client";

import React, { FunctionComponent, InputHTMLAttributes } from "react";
import { CustomInputContainer } from "./style";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef(
  (prosp, ref) => {
    return <CustomInputContainer {...prosp} ref={ref as any} />;
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
