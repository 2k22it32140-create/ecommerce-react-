import React from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout</h1>
      <p>Total Items: {cart.length}</p>
      <p>Total Amount: ₹{total}</p>
      <button style={{ background: 'green', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '5px' }}>Place Order</button>
    </div>
  );
}

export default Checkout;