import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
type Props = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="dashboard-layout horizontal-center">
      <Navbar />
      <main className="dashboard-layout__content vertical-center">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
