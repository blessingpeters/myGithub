import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";

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

  if (loading) return <h1>Loading...</h1>;
  

  return (
    <div className="repo-page repo">
      
      <div className="repo ">
        <h1>Name: {repo.name}</h1>
        <p>Fork: {repo.forks}</p>
        <p>Fork: {repo.language}</p>
        <p>File Size: {repo.size}kb</p>
        <p>visibility : {repo.visibility}</p>
        <p>watchers : {repo.watchers}</p>
        <p>open issues : {repo.open_issues}</p>
        <p>created_at : {repo.created_at}</p>
        
        <div className="flex">
          <button className="repo-items">
            <a target="_blank" rel="noreferrer" href={repo.html_url}>
              View on Github
            </a>
          </button>
          <button className="repo-items" onClick={goBack}>Back</button>
        </div>
      
      </div>
    </div>
  );
}

export default RepoPage;
