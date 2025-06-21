import React, { useState } from 'react';
// import TransportationNavbar from '../navbars/TransportationNavbar';
import './Transportation.css';

const busOptions = [
  {
    name: 'Volvo AC Bus',
    price: '₹500',
    img: '/CamelQ-Task/images/volvo.jpg',
  },
  {
    name: 'Sleeper Bus',
    price: '₹750',
    img: '/CamelQ-Task/images/sleeper.jpg',
  },
];

const Bus = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const handleBook = (bus) => {
    setSelectedBus(bus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ticket booked successfully!');
    setSelectedBus(null);
  };

  return (
    <div>
      <div className="transport-page">
        {!selectedBus ? (
          <>
            <h2 style={{color:'white'}}>Available Buses</h2>
            <div className="transport-grid">
              {busOptions.map((bus, index) => (
                <div key={index} className="transport-option">
                  <img src={bus.img} alt={bus.name} />
                  <h4>{bus.name}</h4>
                  <p>{bus.price}</p>
                  <button onClick={() => handleBook(bus)}>Book Now</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="booking-form">
            <h3>Booking: {selectedBus.name}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Email" required />
              <input type="date" required />
              <button type="submit">Confirm Booking</button>
              <button type="button" onClick={() => setSelectedBus(null)}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bus;
