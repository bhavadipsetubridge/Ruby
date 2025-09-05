
import React from "react";
import "./TeamSection.css";
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Naimur Rahman",
    role: "Branding",
    img: "./Image/team1.png",
  },
  {
    name: "Rakib Hassan",
    role: "Designer",
    img: "./Image/team2.png",
  },
  {
    name: "Afsana Mimi",
    role: "Photographer",
    img: "./Image/team3.png",
  },
  {
    name: "Saiful Abir",
    role: "Developer",
    img: "./Image/team1.png",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section container">
      <div className="header">
        <h2>OUR CREATIVE TEAM</h2>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="image-wrapper">
              <img src={member.img} alt={member.name} />
              <div className="overlay">
                <div className="social-icons">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaDribbble /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
