import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  options: Array<{ label: string; action: () => void; color?: string }>;
};
const Popover: React.FC<PropsWithChildren<Props>> = ({ options }) => {
  return (
    <div className="popover vertical-center">
      {options.map((option, index) => (
        <div
          key={index}
          className="popover__item horizontal-center"
          style={{ color: option.color }}
          onClick={option.action}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Popover;
