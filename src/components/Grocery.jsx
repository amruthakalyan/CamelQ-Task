import React, { useState } from 'react';
import GroceryNavbar from './navbars/GroceryNavbar';
import './Grocery.css';

const groceryData = {
  Fruits: [
    { name: 'Apples', price: '₹120/kg', img: './images/apples.jpg' },
    { name: 'Bananas', price: '₹50/dozen', img: './images/banana.jpg' },
    { name: 'Oranges', price: '₹80/kg', img: './images/orange.jpg' },
    { name: 'Grapes', price: '₹90/kg', img: './images/grapes.jpg' },
  ],
  Vegetables: [
    { name: 'Tomatoes', price: '₹30/kg', img: './images/tomatos.jpg' },
    { name: 'Potatoes', price: '₹25/kg', img: './images/potatos.jpg' },
    { name: 'Onions', price: '₹35/kg', img: './images/onions.jpg' },
    { name: 'Carrots', price: '₹40/kg', img: './images/carriot.jpg' },
  ],
  Dairy: [
    { name: 'Milk', price: '₹55/litre', img: './images/milk.jpg' },
    { name: 'Cheese', price: '₹220/pack', img: './images/cheese.jpg' },
    { name: 'Butter', price: '₹95/pack', img: './images/butter.jpg' },
    { name: 'Yogurt', price: '₹40/cup', img: './images/yogurt.jpg' },
  ],
  Beverages: [
    { name: 'Juice', price: '₹60/bottle', img: './images/juice.jpg' },
    { name: 'Soda', price: '₹30/bottle', img: './images/soda.jpg' },
    { name: 'Tea', price: '₹100/pack', img: './images/tea.jpg' },
    { name: 'Coffee', price: '₹200/pack', img: 'images/coffe.jpg' },
  ],
};

const Grocery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const handleBack = () => setSelectedCategory(null);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div>
      <GroceryNavbar />
      <div className="page">
        {!selectedCategory ? (
          <>
            <h2 style={{color:'white'}}>Choose a Category</h2>
            <div className="category-list">
              {Object.keys(groceryData).map((category) => (
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
            <button onClick={handleBack} className="back-button">
              ← Back to Categories
            </button>
            <h2>{selectedCategory}</h2>
            <div className="product-grid">
              {groceryData[selectedCategory].map((item) => (
                <div key={item.name} className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Grocery;
