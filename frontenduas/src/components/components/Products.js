import React, { useState } from "react";

function Products() {
  // Sample list of products with images
  const products = [
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
      name: "Mango",
      price: 2.0,
      image: "https://via.placeholder.com/150?text=Mango",
    },
    {
      id: 5,
      name: "Pineapple",
      price: 1.8,
      image: "https://via.placeholder.com/150?text=Pineapple",
    },
    {
      id: 6,
      name: "Grapes",
      price: 2.5,
      image: "https://via.placeholder.com/150?text=Grapes",
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
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
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
          placeholder="Search products..."
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
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
