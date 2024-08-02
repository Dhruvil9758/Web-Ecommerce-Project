import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-item">
    <h2>{item.name}</h2>
    <p>{item.price}</p>
    <button onClick={() => removeFromCart(item)}>Remove</button>
  </div>
);

export default CartItem;
