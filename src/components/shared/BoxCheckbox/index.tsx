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
  const [isChecked, setChecked] = useState<boolean>(value);
  return (
    <label className="container">
      <input
        onChange={() => {
          setChecked(!isChecked);
          onChange(isChecked);
        }}
        className="toggle-checkbox"
        type="checkbox"
        checked={isChecked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default BoxCheckbox;
