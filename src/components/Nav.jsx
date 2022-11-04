import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";

function Nav() {
    return (
        <nav className="flex">
            <div className="logo">
                <Link to="/">
                    <Logo />
                </Link>
            </div>

            <div>
                <Link to="/" className="menu">Home</Link>
                <Link to="/errortestpage" className="menu">Error Boundary</Link>
            </div>
        </nav>
    );
  }
  
export default Nav;