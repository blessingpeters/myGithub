import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
import { ReactComponent as Fork } from "../assets/GitFork.svg";
import { ReactComponent as Star } from "../assets/Star.svg";

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
                        <div className="flex repo-card">
                            <div className="repo-card-items flex>
                                 <Fork /><p "> {repo.forks}</p>
                            </div>
                           
                            <p className="repo-card-items flex"><Star /> {repo.stargazers_count}</p>
                            <p className="repo-card-items flex">{repo.language}</p>
                            <p className="repo-card-items flex">{repo.visibility}</p>
                            
                        </div>
                    </Link>
                </div> 
                
             ))}
        </div>
    )
}
export default Repos;