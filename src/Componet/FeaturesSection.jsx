import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeaturesSection.css";
import { FaPaintBrush, FaDatabase, FaSearch } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";

const features = [
  {
    icon: <FaPaintBrush />,
    title: "UX design",
    description:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
  },
  {
    icon: <FaDatabase />,
    title: "UI design",
    description:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
  },
  {
    icon: <FaSearch />,
    title: "SEO Services",
    description:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
  },
  {
    icon: <MdOutlineLaptopChromebook />,
    title: "Web Development",
    description:
      "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater",
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>OUR FEATURES</h2>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="features-content">
        <div className="features-image" data-aos="fade-right">
          <img src="./Image/about.jpg" alt="Team" />
        </div>
        <div className="features-list"  data-aos="fade-left">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="icon">{feature.icon}</div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
