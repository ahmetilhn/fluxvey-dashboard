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
  const [isChecked, setChecked] = useState<boolean>(value);
  return (
    <label className="toggle">
      <input
        onChange={() => {
          setChecked(!isChecked);
          onChange(isChecked);
        }}
        className="toggle-checkbox"
        type="checkbox"
        checked={isChecked}
      />
      <div className="toggle-switch"></div>
      <span className="toggle-label">{isChecked ? "Active" : "Disabled"}</span>
    </label>
  );
};

export default SwitchCheckbox;
