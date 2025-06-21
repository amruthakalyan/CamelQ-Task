import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingNavbar.css';
import { useCart } from '../../context/CartContext';

const ShoppingNavbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="shopping-navbar">
      <Link to="/shopping">Home</Link>
      <Link to="#" onClick={(e) => e.preventDefault()}>Fashion</Link>
      <Link to="#" onClick={(e) => e.preventDefault()}>Electronics</Link>
      <Link to="/cart">🛒 Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default ShoppingNavbar;
