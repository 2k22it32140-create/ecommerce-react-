import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

function Home() {
  const { addToCart } = useCart();
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;