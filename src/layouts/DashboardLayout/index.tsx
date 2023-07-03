import "./index.scss";
import Navbar from "../partials/Navbar";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  useAuth();
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
