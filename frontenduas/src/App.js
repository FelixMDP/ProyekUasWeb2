import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">MiniMarket</h1>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Welcome to MiniMarket!</h2>
          <p>Your one-stop shop for all your daily needs.</p>
          <button className="btn">Shop Now</button>
        </section>

        <section id="products" className="products">
          <h2>Our Products</h2>
          <div className="product-list">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Price: $10</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 2" />
              <h3>Product 2</h3>
              <p>Price: $15</p>
              <button className="btn">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <h3>Product 3</h3>
              <p>Price: $20</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} MiniMarket. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
