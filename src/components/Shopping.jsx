import React, { useState } from 'react';
import ShoppingNavbar from './navbars/ShoppingNavbar';
import './Shopping.css';
import { useCart } from '../context/CartContext';

const shoppingData = {
  Fashion: [
    { name: 'T-Shirt', price: '₹499', img: '/images/tshirt.jpg' },
    { name: 'Jeans', price: '₹999', img: '/images/jeans.jpg' },
    { name: 'Jacket', price: '₹1499', img: '/images/jacket.jpg' },
    { name: 'Shoes', price: '₹1999', img: '/images/shoes.jpg' },
  ],
  Electronics: [
    { name: 'Smartphone', price: '₹15,999', img: '/images/phone.jpg' },
    { name: 'Laptop', price: '₹52,999', img: '/images/laptop.jpg' },
    { name: 'Headphones', price: '₹2,999', img: '/images/headphones.jpg' },
    { name: 'Smartwatch', price: '₹4,999', img: '/images/watch.jpg' },
  ]
};

const Shopping = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();

  return (
    <div>
      <ShoppingNavbar />
      <div className="page">
        {!selectedCategory ? (
          <>
            <h2 style={{color:'white'}}>Select a Category</h2>
            <div className="category-list">
              {Object.keys(shoppingData).map((category) => (
                <div
                  key={category}
                  className="category-card"
                  onClick={() => setSelectedCategory(category)}
                >
                  <h3>{category}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <button onClick={() => setSelectedCategory(null)} className="back-button">← Back</button>
            <h2>{selectedCategory}</h2>
            <div className="product-grid">
              {shoppingData[selectedCategory].map((item) => (
                <div key={item.name} className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shopping;
