import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoPage from "./pages/RepoPage";
import { Nav } from "./components";
import { Home, RepoPage} from "./pages";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/repo/:id" element={<RepoPage/>} />
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;