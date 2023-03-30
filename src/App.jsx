import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Allmenu from "./pages/AllMenu";
import Braekfast from "./pages/Braekfast";
import Lunch from "./pages/Lunch";
import Shapes from "./pages/Shapes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Allmenu />} />
        <Route path="/breakfast" element={<Braekfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/shapes" element={<Shapes />} />
      </Routes>
    </Router>
  );
}

export default App;
