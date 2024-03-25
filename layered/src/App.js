
import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import productsData from './data/products.json';
import './App.css';
import Footer from './components/Footer';
import ProductSearch from './components/ProductSearch';

const App = () => {



  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  const addToLikedItems = (product) => {
    setLikedItems(prevLikedItems => [...prevLikedItems, product]);
  };

  return (
    <div className="app">
      <Header />
      <LandingPage />
      <ProductSearch />

      <section className="products" id="products">
        <h2>Our Products</h2>
        <ProductList
          products={productsData}
          onAddToCart={addToCart}
          onAddToLikedItems={addToLikedItems}
        />
      </section>

      <Cart cartItems={cartItems} likedItems={likedItems} />
      <Footer />
    </div>

  );
};

export default App;
