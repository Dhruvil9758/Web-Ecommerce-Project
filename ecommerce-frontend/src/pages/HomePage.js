import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';
import CategoryList from '../components/Category/CategoryList';
import './Home.css'; // Create a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Store</h1>
        <CategoryList />
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <ProductList />
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default Home;
