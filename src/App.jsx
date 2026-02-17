import React, { useState } from "react";

const App = () => {
  const phrases = [
    "Let's Invest Money",
    "Build Your Financial Future",
    "Grow Your Wealth Today"
  ];

  const [phrase] = useState(() => phrases[Math.floor(Math.random() * phrases.length)]);

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Top Green Box */}
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>To Do List</h1>
      </div>

      {/* Middle Grey Box */}
      <div
        style={{
          backgroundColor: "lightgrey",
          padding: "50px",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        <h2>{phrase}</h2>
        <br />
        <button
          onClick={handleClick}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", marginRight: "10px" }}
        >
          Click Me
        </button>
        <button onDoubleClick={() => console.log("double click done")} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Double Click Me
        </button>
      </div>

      {/* Bottom Orange Box */}
      <div
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>Copyright © 2025</p>
      </div>
    </div>
  );
};

export default App;
