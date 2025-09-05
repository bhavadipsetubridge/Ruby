import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBriefcase,
  FaLightbulb,
  FaPaperPlane,
  FaMoneyBill,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import "./ServiceSection.css";

const services = [
  {
    icon: <FaBriefcase />,
    title: "Web Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaLightbulb />,
    title: "Web Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaPaperPlane />,
    title: "Investment Plan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaMoneyBill />,
    title: "Finance Support",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaGlobe />,
    title: "World Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaRocket />,
    title: "Perfect Solution",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
];

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="service-section container">
      <div className="service-header">
        <h2>EXCLUSIVE SERVICES</h2>
        <div className="divider" />
        <p>We create exclusive & creative Stuffs for our awesome clients</p>
      </div>

      <div className="services-grid"  data-aos="fade-right">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
