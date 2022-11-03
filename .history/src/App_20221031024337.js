import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import RepoPage from "./pages/RepoPage";
import Navbar from "../components";

function App() {
  return (
    <div className="App">
      <Navbar />
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