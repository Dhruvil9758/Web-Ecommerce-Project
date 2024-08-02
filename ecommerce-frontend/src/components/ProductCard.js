import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    <Link to={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;
