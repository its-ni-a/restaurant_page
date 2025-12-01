import React, { useState } from 'react';

const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">Bella Cucina</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          <li>
            <div className="cart-icon" onClick={onCartClick}>
              🛒
              <span className="cart-count">{cartCount}</span>
            </div>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
