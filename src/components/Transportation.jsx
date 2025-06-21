import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TransportationNavbar from './navbars/TransportationNavbar';
import Bus from './transportation/Bus';
import Train from './transportation/Train';
import Flight from './transportation/Flight';


const Transportation = () => {
  return (
    <div>
      <TransportationNavbar />
      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Please select a transportation mode above.</h2>} />
        <Route path="bus" element={<Bus />} />
        <Route path="train" element={<Train />} />
        <Route path="flight" element={<Flight />} />
      </Routes>
    </div>
  );
};

export default Transportation;
