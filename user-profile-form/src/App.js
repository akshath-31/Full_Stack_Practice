import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Both Name and Email are required.');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1>User Profile Form</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginTop: '5px' }}
          />
        </div>
        {error && <p style={{ color: 'red', margin: '0 0 10px 0' }}>{error}</p>}
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Submit
        </button>
      </form>
      {submitted && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '4px', color: '#155724' }}>
          <h3 style={{ marginTop: 0 }}>Profile Submitted Successfully!</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
