import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="site-header">
      <div className="logo">MOB FACTORY</div>

      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        {['New Arrivals', 'Collections', 'Tailoring', 'Accessories', 'Journal'].map(item => (
          <a href="#" key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className="icons">
        <span className="search-icon">🔍</span>
        <span className="user-icon">👤</span>

        <div
          className={`menu-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
