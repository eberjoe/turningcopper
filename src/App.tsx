import './App.css';

import { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">🚀 Turning Copper Work in Progress</p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            🪂 Click me : {count}
          </button>

          <p>New things will spin up soon!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
