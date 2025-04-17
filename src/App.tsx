// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LearnMore from "./components/LearnMore";
import Skateparks from "./pages/Skateparks";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Diy from "./components/Diy";
import SkateparkPage from "./pages/SkateparkPage"; // ⬅️ Import the new component

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LearnMore />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skateparks" element={<Skateparks />} />
          <Route path="/skateparks/:id" element={<SkateparkPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diy" element={<Diy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
