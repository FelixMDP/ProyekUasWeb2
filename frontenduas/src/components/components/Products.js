import React, { useState, useEffect } from "react";
import AddProductsForm from "./AddProductsForm"; // Import the AddProductForm component

function Products() {
  const [products, setProducts] = useState([]); // State to store products
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [showForm, setShowForm] = useState(false); // State to show or hide the form

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/api/products") // Replace with your actual Laravel API URL
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the products state with the data fetched
        setFilteredProducts(data); // Set the filteredProducts state as well
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(
      (product) =>
        product.Nama_Produk.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  // Function to handle adding a new product
  const handleAddProduct = (newProduct) => {
    // Make a POST request to Laravel to add the new product
    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, data]); // Update the list of products
        setFilteredProducts((prevProducts) => [...prevProducts, data]); // Update the filtered products as well
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });

    setShowForm(false); // Close the form after submission
  };

  // Function to show or hide the form
  const toggleForm = () => {
    setShowForm(!showForm);
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

      {/* Add Product Button */}
      <button
        onClick={toggleForm}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Add Product
      </button>

      {/* Conditionally render the AddProductForm */}
      {showForm && (
        <div>
          <AddProductsForm
            onAddProduct={handleAddProduct}
            closeForm={toggleForm}
          />
        </div>
      )}

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
              src={product.Image_Path}
              alt={product.Nama_Produk}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>{product.Nama_Produk}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.Harga.toFixed(2)}</p>
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
              onClick={() => alert(`${product.Nama_Produk} added to cart!`)}
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
