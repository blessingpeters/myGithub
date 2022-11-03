import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import RepoPage from "./pages/RepoPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/repo/:id" element={<RepoPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;