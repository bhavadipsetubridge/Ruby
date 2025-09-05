import React, { useState, useEffect } from "react";
import "./PortfolioViewer.css";
import { CiStopwatch } from "react-icons/ci";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";

const projects = [
  {
    id: 1,
    image: "/Image/single-pf1.jpg",
    title: "Project One",
    description:
      "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, ",
    date: "Jan 30, 2017",
    category: "WordPress",
    url: "https://www.google.com",
  },
  {
    id: 2,
    image: "/Image/single-pf2.jpg",
    title: "Project Two",
    description:
      "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, ",
    date: "Feb 12, 2020",
    category: "React",
    url: "https://www.example.com",
  },
  {
    id: 3,
    image: "/Image/single-pf3.jpg",
    title: "Project Three",
    description:
      "Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, ",
    date: "Feb 12, 2022",
    category: "React",
    url: "https://www.example.com",
  },
];

const PortfolioViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       handleNext();
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, []);
  const project = projects[currentIndex];

  return (
    <div className="portfolio-container container">
      <div className="portfolio-nav">
        <button onClick={handlePrev} className="nav-btn left-btn">
          Previous
        </button>
        <button onClick={handleNext} className="nav-btn right-btn">
          Next
        </button>
      </div>

      <div className="portfolio-content">
        <div className="image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="details">
          <h3 className="project-title">About Project</h3>
          <p className="project-desc">{project.description}</p>

          <h4 className="project-details-heading">Project Details</h4>
        
          <ul className="project-details">
            <li className="detail-item">
              <CiStopwatch className="icon mt-2" />
              <span>Date:</span> {project.date}
            </li>
            <li className="detail-item ">
              <AiTwotoneFolderOpen className="icon mt-2" />
              <span>Category:</span> {project.category}
            </li>
            <li className="detail-item">
              <FiFolder className="icon mt-2" />
              <span>
                Project URL:{" "}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              </span>
            </li>
          </ul>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            🔗 View Live
          </a>
        </div>
      </div>
      <div className="portfolio-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioViewer;
