import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;