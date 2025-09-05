import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./TestimonialCarousel.css"; 

const testimonials = [
  {
    id: 1,
    name: "Sabbir Ahmed",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    image: "./Image/testi-1.jpg",
  },
  {
    id: 2,
    name: "Alina Rose",
    text: "Amazing support and seamless integration. My go-to design team for all projects.",
    image: "./Image/testi-2.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    text: "The experience was fantastic. The team is super talented and professional.",
    image: "./Image/testi-3.jpg",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-section">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="testimonial-slide" key={testimonial.id}>
            <img
              className="testimonial-img"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h2>What Clients Says</h2>
            <p className="testimonial-text">
              <FaQuoteLeft className="quote-icon left" />
              <em>{testimonial.text}</em>
              <FaQuoteRight className="quote-icon right" />
            </p>
            <h4 className="client-name">- {testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
