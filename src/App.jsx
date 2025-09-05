import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Componet/Navbar";
import Footer from "./Componet/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Portfolio from "./Page/Portfolio";
import PortfolioSingle from "./Page/PortfolioSingle";
import Blog from "./Page/Blog";
import BlogSingle from "./Page/BlogSingle";
import NotFound from "./Page/NotFound";
// import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      {/* <SpeedInsights /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-single" element={<PortfolioSingle />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
