import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Repos from "../components/Repos";
import GithubProfile from "../components/GithubProfile";

function Home(){
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

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

    return (
        <div className="container">
            {location.pathname === "/" ? (
            <div>
                <h1>User Repos</h1>
                <Repos currentRepo={currentRepo} />
                <Pagination
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            
            ) : (
            <Outlet />
            )}
           
        </div>

    );
}
export default Home;