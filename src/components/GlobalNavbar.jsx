import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GlobalNavbar.css';


const GlobalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>AllInOne<span className="dot">.</span></Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>

      <ul className={`nav-list ${isOpen ? 'show' : ''}`}>
        <li><Link to="/grocery" onClick={closeMenu}>Grocery</Link></li>
        <li><Link to="/shopping" onClick={closeMenu}>Shopping</Link></li>
        <li><Link to="/transportation/bus" onClick={closeMenu}>Transportation</Link></li>
      </ul>
    </nav>
  );
};

export default GlobalNavbar;
