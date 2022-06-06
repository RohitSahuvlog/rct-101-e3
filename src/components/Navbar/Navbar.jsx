import React from "react";
import { Link } from "react-router-dom";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/" >HOME</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}8</span>
      <button data-cy="navbar-login-logout-button">LoGOUT</button>
    </div>
  );
};

export default Navbar;
