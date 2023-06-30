import React, { PropsWithChildren } from "react";
import { EmojiFrown } from "react-bootstrap-icons";
import "./index.scss";
type Props = {
  msg: string;
};
const NotResult: React.FC<PropsWithChildren<Props>> = ({ msg }) => {
  return (
    <div className="not-result horizontal-center">
      {msg}
      <EmojiFrown />
    </div>
  );
};

export default NotResult;
