import { useState, useEffect } from "react";

function GithubProfile (){
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProfile();
  }, []);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_GITHUB_API_KEY;



  // fetching the user
  const getProfile = async () => {
    const response = await fetch(`${url}/users/ble-syn`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  if (loading) return <h1>Loading...</h1>;

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