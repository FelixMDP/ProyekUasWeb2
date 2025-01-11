import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation in React Router v6+

  const goToProducts = () => {
    navigate("/products"); // Navigate to /products route
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
        padding: "40px",
        textAlign: "center",
        borderRadius: "15px",
        color: "white",
      }}
    >
      <h2>Welcome to DAKO MART!</h2>
      <p>Your one-stop shop for all your daily needs.</p>
      <button
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "1.1em",
          cursor: "pointer",
        }}
        onClick={goToProducts} // Navigate on button click
      >
        Shop Now
      </button>
    </section>
  );
};

export default Home;
