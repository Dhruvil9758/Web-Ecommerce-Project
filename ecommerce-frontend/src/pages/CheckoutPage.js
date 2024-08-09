import React, { useState } from 'react';
import axios from 'axios';
import './Checkout.css'; // Create a CSS file for styling

function Checkout() {
  const [address, setAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', { address, paymentInfo });
      // Redirect to confirmation page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Shipping Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label>Payment Information:</label>
        <input type="text" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
