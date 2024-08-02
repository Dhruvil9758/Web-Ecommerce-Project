import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ addToCart }) => {
    const { id } = useParams();
  
    // Fetch product details from a static list or an API
    const product = {
      id: id,
      name: 'iPhone 13',
      price: '$799',
      imageUrl: '/images/iphone13.jpg',
      description: 'The latest iPhone model with advanced features.'
    };
  
    return (
      <div className="product-details">
        <img src={product.imageUrl} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  

export default ProductPage;
