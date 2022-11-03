import { useState, useEffect } from "react";

function GithubProfile ({profile}){
  return (
    <>
      <h1>User Details</h1>
      <div className="grid">
        <div className="img">
            <img src={user.avatar_url} alt="" />
        </div>
        <div className="user-details">
            <h2>{user.name}</h2>
            <p>{user.login}</p>
            <p>{user.bio}</p>
            <p>{user.email}</p>
            <p>{user.location}</p>
            <p>
                <a target="_blank" rel="noreferrer" href={user.html_url}>
                {user.html_url}
                </a>
            </p>
        </div>
        <div>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </div>
        <div>
            <p>Public Repos: {user.public_repos}</p>
            <p>Public Gists: {user.public_gists}</p>
        </div>
    </div>
    </>
  )

}
export default GithubProfile;