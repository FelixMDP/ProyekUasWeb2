import React from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  // Extended list of featured products, including non-fruit items
  const featuredProducts = [
    {
      id: 1,
      name: "Apple",
      price: 1.2,
      image: "https://via.placeholder.com/150?text=Apple",
    },
    {
      id: 2,
      name: "Banana",
      price: 0.8,
      image: "https://via.placeholder.com/150?text=Banana",
    },
    {
      id: 3,
      name: "Orange",
      price: 1.5,
      image: "https://via.placeholder.com/150?text=Orange",
    },
    {
      id: 4,
      name: "Flour",
      price: 0.5,
      image: "https://via.placeholder.com/150?text=Flour",
    },
    {
      id: 5,
      name: "Sugar",
      price: 0.6,
      image: "https://via.placeholder.com/150?text=Sugar",
    },
    {
      id: 6,
      name: "Cooking Oil",
      price: 2.0,
      image: "https://via.placeholder.com/150?text=Cooking+Oil",
    },
    {
      id: 7,
      name: "Mango",
      price: 2.0,
      image: "https://via.placeholder.com/150?text=Mango",
    },
    {
      id: 8,
      name: "Pineapple",
      price: 1.8,
      image: "https://via.placeholder.com/150?text=Pineapple",
    },
    {
      id: 9,
      name: "Rice",
      price: 1.3,
      image: "https://via.placeholder.com/150?text=Rice",
    },
    {
      id: 10,
      name: "Salt",
      price: 0.4,
      image: "https://via.placeholder.com/150?text=Salt",
    },
  ];

  // Slider settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
          padding: "40px",
          textAlign: "center",
          borderRadius: "15px",
          color: "white",
          marginBottom: "30px",
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
          onClick={goToProducts}
        >
          Shop Now
        </button>
      </section>

      {/* Featured Products Section with Carousel */}
      <section>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Featured Products
        </h3>
        <Slider {...sliderSettings}>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "90%",
                  textAlign: "center",
                  margin: "0 auto",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h4>{product.name}</h4>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
