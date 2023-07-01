import { Outlet } from "react-router-dom";
import poster from "../../assets/svg/logo.svg";
import "./index.scss";
import packageInfo from "../../../package.json";
const AuthLayout = () => {
  return (
    <div className="auth-layout horizontal-center">
      <section className="auth-layout__left vertical-center">
        <img src={poster} alt="" />
        <div className="vertical-center version">BETA</div>
      </section>
      <section className="auth-layout__right vertical-center">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
