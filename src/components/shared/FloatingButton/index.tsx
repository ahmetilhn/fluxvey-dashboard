import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  children: React.ReactNode;
};
const FloatingButton: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return <button className="floating-btn horizontal-center">{children}</button>;
};
export default FloatingButton;
