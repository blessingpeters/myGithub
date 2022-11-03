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
        <div className="profile-details-cont flex">
          <h2>{profile.name}</h2>
          <p>{profile.login}</p>
          <p>{profile.bio}</p>

          <div className="profile-details">
            <Email />
            <p>{profile.email}</p>
          </div>
          <div className="profile-details">
            <Location />
            <p>{profile.location}</p>
          </div>
          <div className="profile-details">
            <Link />
            <a target="_blank" rel="noreferrer" href={profile.html_url}>{profile.html_url}</a>
          </div>
          <div className="flex">
            <div className="profile-details">
              <Followers />
              <p>  Followers: {profile.followers}</p>
            </div>
            <div className="profile-details">
              <Following />
              <p>  Followers: {profile.following}</p>
            </div>
        
          </div>
          <div className="flex">
            <div className="profile-details">
              <Document />
              <div>
                Public Repos:
                <p> {profile.public_repos}</p>
              </div>
              
            </div>
            <div className="profile-details">
              <Edit />
              <p> Public Gists: {profile.public_gists}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default GithubProfile;