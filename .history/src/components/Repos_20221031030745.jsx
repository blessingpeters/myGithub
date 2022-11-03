import React from "react";
import { Link } from "react-router-dom";

function Repos({currentRepo}){
    return(
        <div>
            <h2>Users page</h2>
            {currentRepo.map((repo) => (
                <div key={repo.id}>
                    <h2>Users page</h2>
                    <Link to={`repo/${repo.name}`}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                    </Link>
                </div>
             ))}
        </div>
    )
}
export default Repos;