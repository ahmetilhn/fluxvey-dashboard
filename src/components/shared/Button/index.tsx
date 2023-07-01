import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
  width: string;
};
const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  isActive = true,
  onClick,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      className="button horizontal-center"
      disabled={isActive}
      style={{ width }}
    >
      {children}
    </button>
  );
};

export default Button;
