import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import RepoPage from "./pages/RepoPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/repo/:id" element={<RepoPage/>} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;