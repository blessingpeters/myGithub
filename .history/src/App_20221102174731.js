import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import RepoPage from "./pages/RepoPage";
import NotFound from "./pages/NotFound";


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