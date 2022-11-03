import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Navbar() {
    return (
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        

        <div>
            <Link to="/" className="menu">Home</Link>
        </div>
        <div>
            <Link to="/contact">Error Boundary</Link>
        </div>
      </nav>
    );
  }
  
export default Navbar;