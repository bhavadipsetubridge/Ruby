import React from "react";
import "./StatsCounter.css";
import { FaListAlt, FaSmile, FaBriefcase, FaCoffee } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaListAlt />,
    count: 3468,
    label: "Project Finished",
  },
  {
    id: 2,
    icon: <FaSmile />,
    count: 468,
    label: "Happy Clients",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    count: 4368,
    label: "Hours Work",
  },
  {
    id: 4,
    icon: <FaCoffee />,
    count: 3468,
    label: "Cups of coffees",
  },
];

const StatsCounter = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-box">
            <div className="icon">{stat.icon}</div>
            <h3>{stat.count}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
