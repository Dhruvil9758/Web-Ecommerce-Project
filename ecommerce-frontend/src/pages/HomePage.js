import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'iPhone 11 ', price: '$999' },
    { id: 2, name: 'iPhone 12 Pro', price: '$1099' },
    { id: 3, name: 'iPhone 13 Plus', price: '$1099' },
    { id: 4, name: 'iPhone 14 Pro', price: '$1099' },
    { id: 5, name: 'iPhone 14 Pro Max', price: '$1099' },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}__ `}>{product.name}  </Link> - {product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
