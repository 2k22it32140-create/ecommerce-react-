import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', background: '#fff' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)} style={{ background: '#4a90e2', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px' }}>Add to Cart</button>
      <Link to={`/product/${product.id}`} style={{ marginLeft: '10px', color: '#4a90e2' }}>View</Link>
    </div>
  );
}

export default ProductCard;