import React from "react";
import "./index.scss";
type Props = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="dashboard-layout horizontal-center">
      <aside className="dashboard-layout__left-sidebar vertical-center"></aside>
      <main className="dashboard-layout__content vertical-center">
        {children}
      </main>
      <aside className="dashboard-layout__right-sidebar vertical-center"></aside>
    </div>
  );
};

export default DashboardLayout;
