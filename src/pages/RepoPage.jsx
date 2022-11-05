import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import {ReactComponent as Github} from "../assets/GithubLogo.svg";
import { ReactComponent as Link} from "../assets/link.svg";
import {ReactComponent as Loader} from "../assets/loader.svg";

function RepoPage() {
  const { id } = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const goBack = (e)=>{
    e.preventDefault()
    navigate("/")
  }

  const url = "https://api.github.com";
  const token = process.env.REACT_APP_GITHUB_API_KEY;

  useEffect(() => {
    fetchRepo();
  }, [id]);

  // fetch single repo
  const fetchRepo = async () => {
    const response = await fetch(`${url}/repos/ble-syn/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const data = await response.json();
    setRepo(data);
    setLoading(false);
  };

  if (loading) return <div className="loader" ><Loader className="load" /></div>;
  

  return (
    <div className="repo-page">
      
      <div className="repo">
        <h2>Name: {repo.name}</h2>
        <a target="_blank" rel="noreferrer" href={repo.homepage}><span><Link /></span>View Site</a>

        <h3>Stats</h3>
        <div className="repo-page-deets">
          <p className="repo-page-items">Branch: {repo.default_branch}</p>
          <p className="repo-page-items">Fork: {repo.forks}</p>
          <p className="repo-page-items">Language: {repo.language}</p>
          <p className="repo-page-items">Stars: {repo.stargazers_count}</p>
          <p className="repo-page-items">Watchers: {repo.watchers}</p>
          <p className="repo-page-items">File Size: {repo.size}kb</p>
          <p className="repo-page-items">Visibility : {repo.visibility}</p>
          <p className="repo-page-items">Open Issues : {repo.open_issues}</p>
          <p className="repo-page-items w-2">Created_at : {repo.created_at}</p>

        </div>

        <div className="btn-cont flex">
        
          <a className="repo-items" target="_blank" rel="noreferrer" href={repo.html_url}>
            
            View on Github<Github />
          </a>
          <button className="repo-items" onClick={goBack}>Back</button>
        </div>
      
      </div>
    </div>
  );
}

export default RepoPage;
