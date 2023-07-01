import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick: () => void;
  width: string;
};
const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  isDisabled = true,
  onClick,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      className="button horizontal-center"
      disabled={isDisabled}
      style={{ width }}
    >
      {children}
    </button>
  );
};

export default Button;
