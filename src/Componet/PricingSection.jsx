import React from "react";
import "./PricingSection.css";
import { FaCartPlus } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: 19,
    features: [
      "Responsive( Mobile Website)",
      "24/7 Technic Support",
      "1 Year Hosting Free",
      "Image slider (Animation)",
      "Unlimited Email Account",
      "Free Domain Name",
    ],
  },
  {
    name: "Medium",
    price: 25,
    features: [
      "Responsive( Mobile Website)",
      "24/7 Technic Support",
      "1 Year Hosting Free",
      "Image slider (Animation)",
      "Unlimited Email Account",
      "Free Domain Name",
    ],
    highlighted: true, // special class
  },
  {
    name: "Advanced",
    price: 55,
    features: [
      "Responsive( Mobile Website)",
      "24/7 Technic Support",
      "1 Year Hosting Free",
      "Image slider (Animation)",
      "Unlimited Email Account",
      "Free Domain Name",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Pricing Table</h2>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, idx) => (
          <div
            className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}
            key={idx}
          >
            <div className="card-header">
              {" "}
              <h3>{plan.name.toUpperCase()}</h3>
              <div className={`price-circle ${plan.highlighted ? "glow" : ""}`}>
                <span className="dollar">$</span>
                <span className="amount">{plan.price}</span>
              </div>
            </div>

            <ul className="feature-list">
              {plan.features.map((feature, fidx) => (
                <li className="text-muted" key={fidx}>{feature}</li>
              ))}
            </ul>
            <div className="buy-btn">
              <FaCartPlus />
              <span>Buy Now</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
