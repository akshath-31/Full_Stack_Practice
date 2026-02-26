import logo from './logo.svg';
import './App.css';
import Content from './Content';

function App() {
  function nameChange() {
    const names = ["Earn", "Give", "Invest", "Grow"];
    const value = Math.floor(Math.random() * names.length);
    return names[value];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's {nameChange()}</p>
        <a
          className="App-link"
          href="https://akshathsenthilkumar.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aks Learns react
        </a>
      </header>
      <Content />
    </div>
  );
}

export default App;
