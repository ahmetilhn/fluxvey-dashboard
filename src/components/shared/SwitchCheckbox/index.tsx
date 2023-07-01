import React, { ChangeEvent, PropsWithChildren, useState } from "react";
import "./index.scss";

type Props = {
  onChange: (e: boolean) => void;
  value?: boolean;
};
const SwitchCheckbox: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  value = false,
}) => {
  return (
    <label className="toggle">
      <input
        onChange={() => onChange(!value)}
        className="toggle-checkbox"
        type="checkbox"
        checked={value}
      />
      <div className="toggle-switch"></div>
      <span className="toggle-label">{value ? "Active" : "Disabled"}</span>
    </label>
  );
};

export default SwitchCheckbox;
