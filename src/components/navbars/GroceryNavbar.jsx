import React from 'react';
import { Link } from 'react-router-dom';
import './GroceryNavbar.css';

const GroceryNavbar = () => (
  <nav className="grocery-navbar">
    <Link to="/grocery">Home</Link> |{' '}
    <Link to="/grocery/categories">Categories</Link> |{' '}
    <Link to="/grocery/offers">Offers</Link>
  </nav>
);

export default GroceryNavbar;
