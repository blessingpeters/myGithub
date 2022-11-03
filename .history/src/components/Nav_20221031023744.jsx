import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Navbar() {
    return (
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img className="logo" src={bee} alt="" />
          Home</Link>
        </div>
        

        <div>
            <Link to="/about" className="menu">About</Link>
        </div>
        <div>
            <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    );
  }
  
export default Navbar;