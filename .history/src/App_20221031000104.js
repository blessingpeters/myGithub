import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" {<Home />}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;