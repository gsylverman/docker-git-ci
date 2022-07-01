import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [nr, setNr] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test
        </a>
        <div style={{color: 'yellow'}}>{nr}</div>
        <button onClick={() => setNr(prevState => prevState + 1)}>+</button>
        <button onClick={() => setNr(prevState => prevState - 1)}>-</button>
      </header>
    </div>
  );
}

export default App;
