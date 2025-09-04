import React from 'react';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>No items in cart</p> : cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;