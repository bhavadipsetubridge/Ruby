import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LatestWorks.css";
import { FaImage, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: ["Print", "Web", "Identity"],
    img: "./Image/pf1.jpg",
    title: "Project Name",
  },
  {
    id: 2,
    category: ["Branding"],
    img: "./Image/pf2.jpg",
    title: "Project Name",
  },
  {
    id: 3,
    category: ["Branding", "Web"],
    img: "./Image/pf3.jpg",
    title: "Project Name",
  },
  { id: 4, category: ["Web"], img: "./Image/pf4.jpg", title: "Project Name" },
  {
    id: 5,
    category: ["Wordpress"],
    img: "./Image/pf5.jpg",
    title: "Project Name",
  },
  { id: 6, category: ["Print"], img: "./Image/pf6.jpg", title: "Project Name" },
];

const categories = [
  "All Works",
  "Print",
  "Identity",
  "Branding",
  "Web",
  "Wordpress",
];

const LatestWorkSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredProjects =
    activeCategory === "All Works"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));
  return (
    <section className="latest-works-section container">
      <div className="header">
        <h2>LATEST WORKS</h2>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid" >
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card" data-aos="fade-right">
            <img src={project.img} alt={project.title} />

            <div className="overlay">
              <h4>{project.title}</h4>
              <div className="overlay-icons">
                <button>
                  <FaImage />
                </button>
                <button>
                  <FaLink />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-5">
        <a href="#" className="btn-load">Load More</a>
       </div>
    </section>
  );
};

export default LatestWorkSection;
