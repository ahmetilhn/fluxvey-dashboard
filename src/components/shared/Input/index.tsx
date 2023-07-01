import React, { PropsWithChildren, useState } from "react";
import "./index.scss";
type Props = {
  type: "text" | "password";
  placeholder: string;
  onChange: (val: string) => void;
  value?: string;
};
const Input: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  placeholder,
  type,
  value = "",
}) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
