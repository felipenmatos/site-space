import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./pages/DestinationA";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Destination" element={<Destination />} />
      </Routes>
    </Router>
  );
}

export default App;
