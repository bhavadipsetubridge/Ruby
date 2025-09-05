import React from "react";
import "./ClientLogos.css";

const logos = [
  "./Image/client1.jpg",
  "./Image/client2.jpg",
  "./Image/client3.jpg",
  "./Image/client4.jpg",
  "./Image/client5.jpg",
  "./Image/client6.jpg",
  "./Image/client7.jpg",
  "./Image/client8.jpg",
  "./Image/client1.jpg",
  "./Image/client2.jpg",
];

const ClientLogos = () => {
  return (
    <section className="client-logos-section">
      <div className="carousel container">
        <div className="logos-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt={`Client logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
