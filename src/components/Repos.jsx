import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
import { ReactComponent as Fork } from "../assets/GitFork.svg";
import { ReactComponent as Star } from "../assets/Star.svg";

function Repos({currentRepo}){
    return(
        <div className="repo-container">
            {currentRepo.map((repo) => (
                <Link key={repo.id} className="repo flex hover" to={`repo/${repo.name}`}> 
                   
                    <div className="repo-header">
                        <div className="flex repo-name"> 
                            <h2>{repo.name}</h2>
                            
                            <ExternalLink />
                        </div>
                        
                        <p className="repo-description">{repo.description}</p>
                    </div>
                    
                    <div className="flex repo-item-cont">                        
                        <div className="repo-items flex">
                            <p>{repo.visibility}</p>
                        </div>
                        <div className="repo-items flex">
                            <Fork/> <p>{repo.forks}</p>
                        </div>
                        <div className="repo-items flex">
                            <Star /> <p>{repo.stargazers_count}</p>
                        </div>
                        <div className="repo-items flex">
                            <p>{repo.language}</p>
                        </div>
                    </div>
                    
                  
                </Link>
             ))}
        </div>
    )
}
export default Repos;