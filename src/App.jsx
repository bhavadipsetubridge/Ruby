import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Componet/Navbar";
import Footer from "./Componet/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Portfolio from "./Page/Portfolio";
import PortfolioSingle from "./Page/PortfolioSingle";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-single" element={<PortfolioSingle />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
