import React, { useState } from "react";

function Products() {
  // Extended list of products with categories and images
  const products = [
    // Fruits
    {
      id: 1,
      name: "Apple",
      category: "Fruits",
      price: 1.2,
      image: "https://via.placeholder.com/150?text=Apple",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      price: 0.8,
      image: "https://via.placeholder.com/150?text=Banana",
    },
    {
      id: 3,
      name: "Orange",
      category: "Fruits",
      price: 1.5,
      image: "https://via.placeholder.com/150?text=Orange",
    },
    {
      id: 4,
      name: "Mango",
      category: "Fruits",
      price: 2.0,
      image: "https://via.placeholder.com/150?text=Mango",
    },

    // Staple Foods
    {
      id: 5,
      name: "Rice",
      category: "Staple Food",
      price: 5.0,
      image: "https://via.placeholder.com/150?text=Rice",
    },
    {
      id: 6,
      name: "Flour",
      category: "Staple Food",
      price: 3.5,
      image: "https://via.placeholder.com/150?text=Flour",
    },
    {
      id: 7,
      name: "Sugar",
      category: "Staple Food",
      price: 2.5,
      image: "https://via.placeholder.com/150?text=Sugar",
    },
    {
      id: 8,
      name: "Salt",
      category: "Staple Food",
      price: 0.5,
      image: "https://via.placeholder.com/150?text=Salt",
    },

    // Vegetables
    {
      id: 9,
      name: "Carrot",
      category: "Vegetables",
      price: 1.0,
      image: "https://via.placeholder.com/150?text=Carrot",
    },
    {
      id: 10,
      name: "Tomato",
      category: "Vegetables",
      price: 1.2,
      image: "https://via.placeholder.com/150?text=Tomato",
    },
    {
      id: 11,
      name: "Potato",
      category: "Vegetables",
      price: 0.9,
      image: "https://via.placeholder.com/150?text=Potato",
    },
    {
      id: 12,
      name: "Onion",
      category: "Vegetables",
      price: 1.1,
      image: "https://via.placeholder.com/150?text=Onion",
    },

    // Beverages
    {
      id: 13,
      name: "Milk",
      category: "Beverages",
      price: 2.0,
      image: "https://via.placeholder.com/150?text=Milk",
    },
    {
      id: 14,
      name: "Tea",
      category: "Beverages",
      price: 1.5,
      image: "https://via.placeholder.com/150?text=Tea",
    },
    {
      id: 15,
      name: "Coffee",
      category: "Beverages",
      price: 3.0,
      image: "https://via.placeholder.com/150?text=Coffee",
    },
    {
      id: 16,
      name: "Juice",
      category: "Beverages",
      price: 2.5,
      image: "https://via.placeholder.com/150?text=Juice",
    },

    // Snacks
    {
      id: 17,
      name: "Chips",
      category: "Snacks",
      price: 1.5,
      image: "https://via.placeholder.com/150?text=Chips",
    },
    {
      id: 18,
      name: "Cookies",
      category: "Snacks",
      price: 2.0,
      image: "https://via.placeholder.com/150?text=Cookies",
    },
    {
      id: 19,
      name: "Biscuits",
      category: "Snacks",
      price: 1.8,
      image: "https://via.placeholder.com/150?text=Biscuits",
    },
    {
      id: 20,
      name: "Popcorn",
      category: "Snacks",
      price: 1.2,
      image: "https://via.placeholder.com/150?text=Popcorn",
    },
  ];

  // State for search query and filtered products
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Header with search bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Our Products</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products or categories..."
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "1em",
          }}
        />
      </div>

      {/* Product List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
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
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert(`${product.name} added to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
