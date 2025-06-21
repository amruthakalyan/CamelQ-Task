import React from 'react';
import { Link } from 'react-router-dom';
import './TransportationNavbar.css';

const TransportationNavbar = () => (
  <nav className="transport-navbar">
    <Link to="/transportation/bus">Bus</Link>
    <span className="separator">|</span>
    <Link to="/transportation/train">Train</Link>
    <span className="separator">|</span>
    <Link to="/transportation/flight">Flight</Link>
  </nav>
);

export default TransportationNavbar;
