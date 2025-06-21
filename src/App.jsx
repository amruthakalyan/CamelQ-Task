import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Grocery from './components/Grocery';
import Shopping from './components/Shopping';
// import Bus from './components/transportation/Bus';
// import Train from './components/transportation/Train';
// import Flight from './components/transportation/Flight';
import Transportation from './components/Transportation';

import Home from './components/Home';
import GlobalNavbar from './components/GlobalNavbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalNavbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/shopping" element={<Shopping />} />
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
