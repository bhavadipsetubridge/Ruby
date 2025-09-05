
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../Componet/HeroSection";
import Feautes from "../Componet/FeaturesSection";
import ServiceSection from "../Componet/ServiceSection";
import LatestWorkSection from "../Componet/LatestWorkSection";
import TestimonialCarousel from "../Componet/TestimonialCarousel";
import LatestNews from "../Componet/LatestNews";
import StatsCounter from "../Componet/StatsCounter";
import TeamSection from "../Componet/TeamSection";
import PricingSection from "../Componet/PricingSection";
import MapComponent from "../Componet/MapComponent";
import ContactSection from "../Componet/ContactSection";
import ClientLogos from "../Componet/ClientLogos";

const Home = () => {
  const location = useLocation();


  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash;

      if (hash === "#services" && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "#team" && teamRef.current) {
        teamRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "#contact" && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <>
      <HeroSection />
      <Feautes />

      <div ref={servicesRef} id="services">
        <ServiceSection />
      </div>

      <LatestWorkSection />
      <TestimonialCarousel />
      <LatestNews />
      <StatsCounter />

      <div ref={teamRef} id="team">
        <TeamSection />
      </div>

      <PricingSection />
      <MapComponent />

      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>

      <ClientLogos />
    </>
  );
};

export default Home;
