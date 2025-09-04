import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#4a90e2', padding: '10px' }}>
      <h1 style={{ display: 'inline', color: '#fff', marginRight: '20px' }}>ColorShop</h1>
      <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
      <Link to="/cart" style={{ margin: '0 10px', color: '#fff' }}>Cart</Link>
      <Link to="/checkout" style={{ margin: '0 10px', color: '#fff' }}>Checkout</Link>
    </nav>
  );
}

export default Navbar;