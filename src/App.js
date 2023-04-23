import Profile from "./pages/Profile";
import Module from "./pages/Module";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Module" element={<Module />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
