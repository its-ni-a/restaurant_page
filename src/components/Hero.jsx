import React from 'react';

const Hero = () => {
  const handleMenuClick = (e) => {
    e.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div>
        <h1>Bella Cucina</h1>
        <p>Authentic Italian Cuisine in the Heart of the City</p>
        <a href="#menu" className="btn" onClick={handleMenuClick}>View Our Menu</a>
      </div>
    </section>
  );
};

export default Hero;
