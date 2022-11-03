import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function GithubProfile (){
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(5);

  const location = useLocation();

  useEffect(() => {
    getProfile();
    getRepo();
  }, []);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_GITHUB_API_KEY;

  // "https://api.github.com/users/username"

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

  // fetching the repos
  const getRepo = async () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 20,
    });
    const response = await fetch(`${url}/users/ble-syn/repos?${params}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setRepos(data);
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