import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
import { ReactComponent as Fork } from "../assets/GitFork.svg";

function Repos({currentRepo}){
    return(
        <div className="repo-container">
            {currentRepo.map((repo) => (
            
                <div className="repos" key={repo.id}>
                    <Link className="repo-link" to={`repo/${repo.name}`}> 
                        <div className="flex">
                           <h2>{repo.name}</h2>
                            <ExternalLink />
                        </div> 
                        <p>{repo.description}</p>
                        <div>
                            <p><Fork /> {repo.forks}</p>
                            <p>{repo.language}</p>
                        </div>
                    </Link>
                </div> 
                
             ))}
        </div>
    )
}
export default Repos;