import { useState } from 'react';
import ArrayComponent from './ArrayComponent';

function App() {
  const [size, setSize] = useState(10);
  const [isSorting, setIsSorting] = useState(false);

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="app">
      <div className="form-control">
        <label htmlFor="size">Size {size}</label>
        <input
          disabled={isSorting}
          className="slider"
          id="size"
          min="4"
          max="170"
          type="range"
          value={size}
          onChange={changeSize}
        />
      </div>
      <ArrayComponent
        size={Number(size)}
        isSorting={isSorting}
        setIsSorting={setIsSorting}
      />
    </div>
  );
}

export default App;
