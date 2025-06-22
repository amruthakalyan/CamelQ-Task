import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Grocery from './components/Grocery';
import Shopping from './components/Shopping';
import Cart from './components/Cart';
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import Bus from './components/transportation/Bus';
// import Train from './components/transportation/Train';
// import Flight from './components/transportation/Flight';
import Transportation from './components/Transportation';

import Home from './components/Home';
import GlobalNavbar from './components/GlobalNavbar';
import Footer from './components/Footer';


const BackToHomeHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [location.pathname, navigate]);

  return null;
};


function App() {
  return (
    <>
      <GlobalNavbar />
          <BackToHomeHandler /> 

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grocery" element={<Grocery />} />


          <Route path="/grocery" element={<Grocery />} />
          <Route path="/grocery/categories" element={<Grocery />} />
          <Route path="/grocery/offers" element={<Grocery />} />



          <Route path="/shopping" element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/transportation/bus" element={<Bus />} />
          <Route path="/transportation/train" element={<Train />} />
          <Route path="/transportation/flight" element={<Flight />} /> */}

          <Route path="/transportation/*" element={<Transportation />} />


        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
