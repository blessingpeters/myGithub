import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Repos from "../components/Repos";

function Home(){
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(5);

  const location = useLocation();

  useEffect(() => {
    fetchUser();
    fetchRepo();
  }, []);

  const url = process.env.REACT_APP_GITHUB_URL;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  // "https://api.github.com/users/username"

  // fetching the user
  const fetchUser = async () => {
    const response = await fetch(`${url}/users/josephe44`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  // fetching the repos
  const fetchRepo = async () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 20,
    });
    const response = await fetch(`${url}/users/josephe44/repos?${params}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
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
            <div id="left">
            <Repos currentRepo={currentRepo} />
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            </div>
            <div id="right">

            </div>
        </div>

    )
}
export default Home;