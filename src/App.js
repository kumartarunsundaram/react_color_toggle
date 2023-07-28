import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    // Generate a random color for the background
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <header>
        <h1>Background Color Toggle</h1>
      </header>
      <main>
        <p>Click the button below to toggle the background color.</p>
        <button onClick={toggleBackgroundColor}>Toggle Color</button>
      </main>
    </div>
  );
}

export default App;
