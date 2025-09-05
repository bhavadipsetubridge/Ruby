import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Particles from './Particles'; // Make sure this is your custom component
import './HeroSection.css';

const HeroSection = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Design', 'Theme', 'Codes'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section" style={{ width: '100%', height: '600px', position: 'relative' }}>
      {/* Your Custom Particles Component */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="hero-content">
        <h1>
          Awesome Creative <span ref={typedElement} className="typed-text text-highlight"></span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <a href="#" className="btn-load">Load More</a>
      </div>
    </section>
  );
};

export default HeroSection;
