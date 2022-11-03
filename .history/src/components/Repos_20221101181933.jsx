import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
import { ReactComponent as Fork } from "../assets/GitFork.svg";
import { ReactComponent as Star } from "../assets/Star.svg";

function Repos({currentRepo}){
    return(
        <div className="repo-container">
            {currentRepo.map((repo) => (
                <Link key={repo.id} className="repo-link repo" to={`repo/${repo.name}`}> 
                   
                    <div className="flex">
                        <h2>{repo.name}</h2>
                        <ExternalLink />
                    </div> 

                    <p>{repo.description}</p>

                    <div className="flex repo-card">
                        <div className="repo-card-items flex">
                            <Fork/> <p>{repo.forks}</p>
                        </div>
                        <div className="repo-card-items flex">
                            <Star /> <p>{repo.stargazers_count}</p>
                        </div>
                        <div className="repo-card-items flex">
                            <p>{repo.language}</p>
                        </div>
                        <div className="repo-card-items flex">
                                <p>{repo.visibility}</p>
                        </div>

                        
                    </div>
                    
                  
                </Link>
             ))}
        </div>
    )
}
export default Repos;