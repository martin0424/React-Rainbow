import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  
  const handleAddColor = (newColor) =>{
      setColors([...colors, newColor])
    }
  
  return (
    <div className="App">
      {colors.map((color, i) =>
        <ColorBlock key={color} color={color} />
      )}

      <ColorForm addColor={handleAddColor} />
    </div>
  );
}

export default App;
