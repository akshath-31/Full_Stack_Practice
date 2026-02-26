import React, { useState } from 'react';

function App() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit = celsius === '' ? '' : (parseFloat(celsius) * 9 / 5) + 32;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1>Temperature Converter</h1>
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Celsius (°C):
          <br />
          <input 
            type="number" 
            value={celsius} 
            onChange={(e) => setCelsius(e.target.value)} 
            placeholder="Enter temperature in °C"
            style={{ padding: '8px', width: '100%', marginTop: '5px', boxSizing: 'border-box' }}
          />
        </label>
      </div>
      <div style={{ padding: '10px', background: '#eef' }}>
        <p style={{ margin: 0, fontSize: '18px' }}>
          Fahrenheit: <strong>{fahrenheit !== '' ? `${fahrenheit.toFixed(2)} °F` : '--'}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
