import React from "react";
import { useNavigate} from "react-router-dom";
import error404 from "../assets/404-error.png"

function NotFound() {
  const navigate = useNavigate()
  const  goHome =(event) =>{
    event.preventDefault()
    navigate("/")
}
  return <div className="notfound error-cont repo">
    <img src={error404} alt="404 error" />
    <h3>Sorry, we couldnt find the page you are Looking for.</h3>
    <button className="repo-items" onClick={goHome}>Go Back</button>
  </div>;
}

export default NotFound;
