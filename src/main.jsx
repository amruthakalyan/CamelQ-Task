
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import { CartProvider } from './context/CartContext';
import './main.css';


import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
    <BrowserRouter basename="/CamelQ-Task">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
 
);
