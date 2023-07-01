import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  type: "text" | "password";
  placeholder: string;
  onChange: () => void;
};
const Input: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  placeholder,
  type,
}) => {
  return (
    <input
      className="input"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
