import React, { PropsWithChildren, useState } from "react";
import "./index.scss";

type Props = {
  onChange: (e: boolean) => void;
  value?: boolean;
};
const BoxCheckbox: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  value = false,
}) => {
  return (
    <label className="container">
      <input
        onChange={() => onChange(!value)}
        className="toggle-checkbox"
        type="checkbox"
        checked={value}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default BoxCheckbox;
