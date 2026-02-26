import React, { useState } from 'react';

const Product = ({ name, price, onBuy }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
    <h3>{name}</h3>
    <p>₹{price}</p>
    <button onClick={onBuy} style={{ padding: '5px 10px', cursor: 'pointer' }}>Buy</button>
  </div>
);

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: 'Laptop', price: 99999 },
    { id: 2, name: 'Smartphone', price: 34699 },
    { id: 3, name: 'Headphones', price: 1999 }
  ];

  const handleBuy = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h1>E-Commerce Product Listing</h1>
      <div style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
        <h2>Cart Items: {cartCount}</h2>
      </div>
      <div>
        {products.map((product) => (
          <Product 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            onBuy={handleBuy} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
