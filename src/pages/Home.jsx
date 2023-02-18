import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Repos from "../components/Repos";
import GithubProfile from "../components/GithubProfile";
import Nav from "../components/Nav";
import {ReactComponent as Loader} from "../assets/loader.svg";

function Home(){
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [repoPerPage] = useState(4);
    const [search, setSearch]= useState([])

  const location = useLocation();

  useEffect(() => {
    getProfile();
    getRepo();
  }, []);

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_GITHUB_API_KEY;
  
    // fetching MY PROFILE
    const getProfile = async () => {
      const response = await fetch(`${url}/users/blesssingpeters`, {
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
    
    const response = await fetch(`${url}/users/blessingpeters/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepos(data);
    setLoading(false);
  };

  // NEW FEATURE: Searching for Other GitHub Users
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;
    await handleSearchUser();
    await handleSearchRepo();
  };

  const handleSearchUser = async () => {
    const response = await fetch(`${url}/users/${search}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  const handleSearchRepo = async () => {
    const response = await fetch(`${url}/users/${search}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const data = await response.json();
    setRepos(data);
    setLoading(false);
    console.log(data);
  };


  if (loading) return <div className="loader" ><Loader className="load" /></div>;

  // Pagination logic
  const indexOfLastNumber = currentPage * repoPerPage;
  const indexOfFirstNumber = indexOfLastNumber - repoPerPage;
  const currentRepo = repos.slice(indexOfFirstNumber, indexOfLastNumber);
  const numberOfPages = Math.ceil(repos.length / repoPerPage);

    return (
        <div className="container">
            <Nav
              handleSearch={handleSearch} 
              search={search} 
              setSearch={setSearch}
            />
          {location.pathname === "/" ? (
          <div className="main flex">
            <div id="left">
              
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

          </div>
          
          ) : (
          <Outlet />
          )}
           
        </div>

    );
}
export default Home;