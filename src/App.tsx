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
import SkateparkPage from "./pages/SkateparkPage";
import New from "./pages/New";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    // full‑screen dark background + white text
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col">
      <Router>
        <ScrollToTop />
        <NavBar />

        {/* make main grow so footer sticks to bottom */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<LearnMore />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skateparks" element={<Skateparks />} />
            <Route path="/skateparks/:id" element={<SkateparkPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/diy" element={<Diy />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
