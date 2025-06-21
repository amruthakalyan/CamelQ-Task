import React, { useState } from 'react';
// import TransportationNavbar from '../navbars/TransportationNavbar';
import './Transportation.css';

const trainOptions = [
  { name: 'Rajdhani Express', price: '₹1200', img: '/CamelQ-Task/images/rajdhani.jpg' },
  { name: 'Shatabdi Express', price: '₹1000', img: '/CamelQ-Task/images/shatabdi.jpg' },
];

const Train = () => {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Train ticket booked!');
    setSelected(null);
  };

  return (
    <div>
      {/* <TransportationNavbar /> */}
      <div className="transport-page">
        {!selected ? (
          <>
            <h2>Available Trains</h2>
            <div className="transport-grid">
              {trainOptions.map((train, i) => (
                <div key={i} className="transport-option">
                  <img src={train.img} alt={train.name} />
                  <h4>{train.name}</h4>
                  <p>{train.price}</p>
                  <button onClick={() => setSelected(train)}>Book Now</button>
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

export default Train;
