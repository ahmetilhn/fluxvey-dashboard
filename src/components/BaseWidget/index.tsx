import React, { PropsWithChildren } from "react";
import "./index.scss";
type Props = {
  title?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
};
const BaseWidget: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
  width,
  height,
}) => {
  return (
    <section className="base-widget vertical-center" style={{ width, height }}>
      <header className="base-widget__header">
        <h3>{title}</h3>
      </header>
      <main
        className={`base-widget__content ${
          !!title && "base-widget__content--with-title"
        }`}
      >
        {children}
      </main>
    </section>
  );
};

export default BaseWidget;
