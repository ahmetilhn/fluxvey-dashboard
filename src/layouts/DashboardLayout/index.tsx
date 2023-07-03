import "./index.scss";
import Navbar from "../partials/Navbar";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../partials/Header";

const DashboardLayout = () => {
  useAuth();
  return (
    <div className="dashboard-layout horizontal-center">
      <Navbar />
      <main className="dashboard-layout__content vertical-center">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
