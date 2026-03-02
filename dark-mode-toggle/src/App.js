import React, { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const themeStyle = {
    padding: '40px',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    background: isDarkMode ? '#222' : '#FFF',
    color: isDarkMode ? '#FFF' : '#222',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    boxSizing: 'border-box'
  };

  if (!isLoaded) return null; // Prevent flicker

  return (
    <div style={themeStyle}>
      <h1>Dark Mode Toggle</h1>
      <p style={{ fontSize: '18px' }}>
        Current mode: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong>
      </p>
      <button 
        onClick={toggleDarkMode} 
        style={{ 
          padding: '10px 20px', 
          cursor: 'pointer',
          fontSize: '16px',
          background: isDarkMode ? '#FFF' : '#222',
          color: isDarkMode ? '#222' : '#FFF',
          border: '1px solid currentColor',
          borderRadius: '5px'
        }}
      >
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
