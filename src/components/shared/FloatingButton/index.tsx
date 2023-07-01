import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
const FloatingButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="floating-btn horizontal-center">
      {children}
    </button>
  );
};
export default FloatingButton;
