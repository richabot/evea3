import React from "react";
import {Link, useNavigate} from "react-router-dom"
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigate = useNavigate();
const handleLoginClick=()=>{
  navigate("/login");
}
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">Count{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Navbar;
