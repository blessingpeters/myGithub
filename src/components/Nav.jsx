import react from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";

function Nav({handleSearch, search, setSearch}) {
    return (
        <nav className="flex">
            <div className="logo">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <form onSubmit={handleSearch}>
                <input className="search-input" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search For a Github User" />
                <button className="search-btn"><p>Search</p>  <RightArrow className="btn-arrow" /></button>
            </form>
            <div>
                <Link to="/" className="menu">Home</Link>

                <Link to="/errortestpage" className="menu">Error Boundary</Link>
            </div>
        </nav>
    );
  }
  
export default Nav;