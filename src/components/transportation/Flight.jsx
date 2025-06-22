import React, { useState } from 'react';
// import TransportationNavbar from '../navbars/TransportationNavbar';
import './Transportation.css';

const flightOptions = [
  { name: 'IndiGo', price: '₹3500', img: '/CamelQ-Task/images/indigo.jpg' },
  { name: 'Air India', price: '₹4200', img: '/CamelQ-Task/images/airindia.jpg' },
];

const Flight = () => {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Flight booked!');
    setSelected(null);
  };

  return (
    <div>
      {/* <TransportationNavbar /> */}
      <div className="transport-page">
        {!selected ? (
          <>
            <h2 style={{color:'white'}}>Available Flights</h2>
            <div className="transport-grid">
              {flightOptions.map((flight, i) => (
                <div key={i} className="transport-option">
                  <img src={flight.img} alt={flight.name} />
                  <h4>{flight.name}</h4>
                  <p>{flight.price}</p>
                  <button onClick={() => setSelected(flight)}>Book Now</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="booking-form">
            <h3>Booking: {selected.name}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
              <input type="date" required />
              <button type="submit">Confirm</button>
              <button type="button" onClick={() => setSelected(null)}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flight;
