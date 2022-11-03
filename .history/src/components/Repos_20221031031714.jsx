import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";

function Repos({currentRepo}){
    return(
        <div className="repo-container">
            {currentRepo.map((repo) => (
            
                <div className="repos" key={repo.id}>
                    <Link to={`repo/${repo.name}`}> 
                        <div>
                            <h2>Users page</h2>
                            <ExternalLink />
                        </div> 
                        
                        
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </Link>
                </div> 
                
             ))}
        </div>
    )
}
export default Repos;