import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";

function Repos({currentRepo}){
    return(
        <div>
            {currentRepo.map((repo) => (
                <Link to={`repo/${repo.name}`}>
                    <div className="repos" key={repo.id}>
                        <h2>Users page</h2>
                        
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>

                    
                        <ExternalLink />
                    </div> 
                </Link>
             ))}
        </div>
    )
}
export default Repos;