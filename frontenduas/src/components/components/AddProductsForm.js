import React, { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    Nama_Produk: "",
    category: "",
    Harga: "",
    Jumlah_Stok: "",
    Image_Path: "",
  });

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Ensure Harga and Jumlah_Stok are in correct format
    const formattedProduct = {
      ...newProduct,
      Harga: parseFloat(newProduct.Harga), // Ensure Harga is a number
      Jumlah_Stok: parseInt(newProduct.Jumlah_Stok), // Ensure Jumlah_Stok is an integer
    };

    // Pass the new product data to parent
    onAddProduct(formattedProduct);

    // Clear the form after submission
    setNewProduct({
      Nama_Produk: "",
      category: "",
      Harga: "",
      Jumlah_Stok: "",
      Image_Path: "",
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add a New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Product Name</label>
          <input
            type="text"
            name="Nama_Produk"
            value={newProduct.Nama_Produk}
            onChange={handleFormChange}
            placeholder="Enter product name"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleFormChange}
            placeholder="Enter category"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Price</label>
          <input
            type="number"
            name="Harga"
            value={newProduct.Harga}
            onChange={handleFormChange}
            placeholder="Enter price"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Jumlah Stock</label>
          <input
            type="text"
            name="Jumlah_Stok"
            value={newProduct.Jumlah_Stok}
            onChange={handleFormChange}
            placeholder="Enter Jumlah Stock"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Image URL</label>
          <input
            type="text"
            name="Image_Path"
            value={newProduct.Image_Path}
            onChange={handleFormChange}
            placeholder="Enter image URL"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tambahkan
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
