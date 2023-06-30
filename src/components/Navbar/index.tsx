import "./index.scss";
import logo from "../../assets/svg/logo.svg";
import { BrowserRouter, NavLink } from "react-router-dom";
import {
  InboxFill,
  GearFill,
  Speedometer,
  MenuButtonWideFill,
} from "react-bootstrap-icons";
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
    icon: <InboxFill />,
    href: "/answers",
  },
  {
    icon: <GearFill />,
    href: "/settings",
  },
];
const Navbar = () => {
  return (
    <nav className="navbar vertical-center">
      <div className="navbar__logo vertical-center">
        <img src={logo} alt="Fluxvey Logo" />
      </div>
      <div className="navbar__links vertical-center">
        <BrowserRouter>
          {menus.map((item) => (
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "active link vertical-center"
                  : "link vertical-center"
              }
              key={item.href}
            >
              {item.icon}
            </NavLink>
          ))}
        </BrowserRouter>
      </div>
      <div className="navbar__profile"></div>
    </nav>
  );
};

export default Navbar;
