// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LearnMore />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
