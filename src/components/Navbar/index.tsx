import "./index.scss";
import logo from "../../assets/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";
import {
  GearFill,
  Speedometer,
  MenuButtonWideFill,
  DoorClosedFill,
} from "react-bootstrap-icons";
import useAuth from "../../hooks/useAuth";
const menus = [
  {
    icon: <Speedometer />,
    href: "/",
  },
  {
    icon: <MenuButtonWideFill />,
    href: "/surveys",
  },
  {
    icon: <GearFill />,
    href: "/settings",
  },
];
const Navbar = () => {
  const { logout } = useAuth();
  return (
    <nav className="navbar vertical-center">
      <div className="navbar__logo vertical-center">
        <Link to="/" className="vertical-center">
          <img src={logo} alt="Fluxvey Logo" />
        </Link>
      </div>
      <div className="navbar__links vertical-center">
        {menus.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              isActive ? "active link vertical-center" : "link vertical-center"
            }
            key={item.href}
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
      <div className="navbar__logout vertical-center">
        <DoorClosedFill onClick={logout} width="20px" height="20px" />
      </div>
    </nav>
  );
};

export default Navbar;
