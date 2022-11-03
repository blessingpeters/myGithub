import { useState, useEffect } from "react";

function GithubProfile ({profile}){
  return (
    <>
      <h1>profile Details</h1>
      <div>
        <div className="img">
            <img src={profile.avatar_url} alt="" />
        </div>
        <div className="profile-details">
            <h2>{profile.name}</h2>
            <p>{profile.login}</p>
            <p>{profile.bio}</p>
            <p>{profile.email}</p>
            <p>{profile.location}</p>
            <p>
                <a target="_blank" rel="noreferrer" href={profile.html_url}>
                {profile.html_url}
                </a>
            </p>
        </div>
        <div>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
        </div>
        <div>
            <p>Public Repos: {profile.public_repos}</p>
            <p>Public Gists: {profile.public_gists}</p>
        </div>
    </div>
    </>
  )

}
export default GithubProfile;