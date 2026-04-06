import Logo from "./../assets/logo.png";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
        Routemate
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
