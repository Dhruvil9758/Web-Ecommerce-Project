import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;
