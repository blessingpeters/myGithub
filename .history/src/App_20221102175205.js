import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import RepoPage from "./pages/RepoPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./pages/ErrorTestPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/repo/:id" element={<RepoPage/>} />
        </Route>
        <Route path="/errorboundary" element={ErrorBoundary}/>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
}

export default App;