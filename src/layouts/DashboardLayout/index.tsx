import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout horizontal-center">
      <Navbar />
      <main className="dashboard-layout__content vertical-center">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
