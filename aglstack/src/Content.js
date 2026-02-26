import React from 'react';

const Content = () => {
  function Namechange() {
    const names = ["Earn", "Invest", "Grow", "Give"];
    const values = Math.floor(Math.random() * 4);
    return names[values];
  }

  const contentStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    width: '80%',
  };
  
  const handleClick = (e) => {
    console.log(e.target.innerText);
  }

    const handleClick2 = (name) => {
    console.log("Thanks for support", {name});
  }

  return (
    <div style={contentStyle}>
      <p>Let's {Namechange()} Money</p>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Click Me
      </button>
    </div>
  );
};

export default Content;
