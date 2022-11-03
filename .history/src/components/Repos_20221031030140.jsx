import React from "react";
import { Link } from "react-router-dom";

function Repos({currentRepo}){
    return(
        <div>
            {currentRepo.map((repo) => (
                <div key={repo.id}>
                    <Link to={`repo/${repo.name}`}>
                    <h3>{repo.name}</h3>
                    </Link>
                </div>
             ))}
        </div>
    )
}
export default Repos;