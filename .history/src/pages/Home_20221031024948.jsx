import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Repos from "../components/Repos";
import GithubProfile from "../components/GithubProfile";
import Nav from "../components/Nav";

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
  
    // fetching MY PROFILE
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

  // fetching MY REPOS 
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
            <Nav />
          {location.pathname === "/" ? (
          <>
              <div id="left">
                  <h1>User Repos</h1>
                  <Repos currentRepo={currentRepo} />
                  <Pagination
                      numberOfPages={numberOfPages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                  />  
              </div> 
              <div id="right">
                  <GithubProfile profile={user} />
              </div>

          </>
          
          ) : (
          <Outlet />
          )}
           
        </div>

    );
}
export default Home;