// src/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching from an API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product'); // Replace with actual URL
        console.log(response.data);
        setProducts(response.data); // Assuming the data structure

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.name} style={{ width: '200px' }} />
            <p>Price: ${product.price}</p>
            <p>Stock: {product.availableStock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
