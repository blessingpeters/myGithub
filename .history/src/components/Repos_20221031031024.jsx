import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";

function Repos({currentRepo}){
    return(
        <div>
            {currentRepo.map((repo) => (
                <div className="repos" key={repo.id}>
                    <h2>Users page</h2>
                    <Link to={`repo/${repo.name}`}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>

                    </Link>
                    <ExternalLink />
                </div>
             ))}
        </div>
    )
}
export default Repos;