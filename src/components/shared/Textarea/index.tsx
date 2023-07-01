import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  placeholder: string;
  onChange: (val: string) => void;
  value?: string;
};
const Textarea: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  placeholder,
  value,
}) => {
  return (
    <textarea
      className="textarea"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
