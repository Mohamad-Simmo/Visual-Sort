import { useState, useEffect } from 'react';
import './App.css';

const generateArray = (size) => {
  return new Array(size).fill().map(() => Math.ceil(Math.random() * size));
};

const Bar = ({ height, width }) => {
  return (
    <div
      className="array--bar"
      style={{
        minHeight: `${height}%`,
        minWidth: `${width}%`,
      }}
    ></div>
  );
};

const ArrayComponent = ({ size }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(generateArray(size));
  }, [size]);

  const sort = () => {
    setArr([...arr.sort((a, b) => a - b)]);
  };

  return (
    <>
      <div className="array--container">
        {arr.map((num, idx) => (
          <Bar
            key={idx}
            val={num}
            height={(num / size) * 100}
            width={100 / size}
          />
        ))}
      </div>
      <div className="array--actions">
        <button className="btn" onClick={() => setArr(generateArray(size))}>
          Reset
        </button>
        <button className="btn" onClick={sort}>
          Sort
        </button>
      </div>
    </>
  );
};

function App() {
  const [size, setSize] = useState(512);
  return (
    <div className="app">
      <div className="form-control">
        <label htmlFor="size">Size {size}</label>
        <input
          className="slider"
          id="size"
          min="2"
          max="1024"
          type="range"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <ArrayComponent size={Number(size)} />
    </div>
  );
}

export default App;
