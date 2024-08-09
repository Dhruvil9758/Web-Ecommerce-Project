import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Create a CSS file for styling

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <Link to={`/product/${product._id}`} className="view-details">View Details</Link>
      </div>
    </div>
  );
}

export default ProductCard;
