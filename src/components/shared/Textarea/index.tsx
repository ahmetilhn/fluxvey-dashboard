import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  placeholder: string;
  onChange: () => void;
};
const Textarea: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  placeholder,
}) => {
  return (
    <textarea
      className="textarea"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
