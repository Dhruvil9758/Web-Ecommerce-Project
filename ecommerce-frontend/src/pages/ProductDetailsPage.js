import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams();
  // You can fetch product details based on the id here

  return (
    <div>
      <h2>Product Details</h2>
      {/* Render product details based on id */}
    </div>
  );
};

export default ProductDetailsPage;
