import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p className="logo">Friends of Bulgaria</p>
        <ul className="nav-menu">
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Project Partners</li>
          <li>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Fundraisers{" "}
            </Link>
          </li>
          <li href="#">Our Supporters</li>
          <HiSearch />
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <AiOutlineShoppingCart size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
