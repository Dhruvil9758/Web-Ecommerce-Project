import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css'; // Create a CSS file for styling

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('price-asc');

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(`/api/products?category=${selectedCategory}&sort=${sortOrder}`);
      setProducts(result.data);
    };

    fetchProducts();
  }, [selectedCategory, sortOrder]);

  return (
    <div className="product-list">
      <div className="filters">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>
      </div>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
