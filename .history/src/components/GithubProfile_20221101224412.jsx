import React from "react";
import { ReactComponent as Link} from "../assets/link.svg";
import { ReactComponent as Email } from "../assets/Message.svg";
import { ReactComponent as Location } from "../assets/Location.svg";
import { ReactComponent as Edit } from "../assets/Edit.svg";
import { ReactComponent as Document } from "../assets/Document.svg";
import { ReactComponent as Followers } from "../assets/User1.svg";
import {ReactComponent as Following } from "../assets/User2.svg";

function GithubProfile ({profile}){
  return (
    <>
      <div>
        <div className="img">
          <img className="profile-img" src={profile.avatar_url} alt="" />
        </div>
        <div className="profile-details flex">
          <h2>{profile.name}</h2>
          <p>{profile.login}</p>
          <p>{profile.bio}</p>

          <div className="repo-items flex">
            <Email />
            <p>{profile.email}</p>
          </div>
         
          <p><Location />  <span>{profile.location}</span></p>
          <p>
            <Link />
            <a target="_blank" rel="noreferrer" href={profile.html_url}>
            {profile.html_url}
            </a>
          </p>
          <div className="flex">
            <p> <Followers /> Followers: {profile.followers}</p>
            <p> <Following /> Following: {profile.following}</p>
          </div>
          <div className="flex">
            <p> <Document />Public Repos: {profile.public_repos}</p>
            <p> <Edit />Public Gists: {profile.public_gists}</p>
          </div>
        </div>
      </div>
    </>
  )

}
export default GithubProfile;