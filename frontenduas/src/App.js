import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Mengimpor ikon keranjang
import Home from "./components/components/Home.js";
import Products from "./components/components/Products";
import About from "./components/components/About";
import Contact from "./components/components/Contact";
import Cart from "./components/components/Cart"; // Impor komponen Cart
import Transaksi from "./components/components/Transaksi";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="logo">DAKO MART</h1>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" className="cart-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />{" "}
              {/* Ikon keranjang */}
            </Link>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transaksi" element={<Transaksi />} />{" "}
            {/* Route for Transaksi */}
          </Routes>
        </main>

        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} MiniMarket. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
