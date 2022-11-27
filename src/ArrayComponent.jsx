import { useState, useEffect } from 'react';
import { bubbleSortAnimation } from './algorithms';
import Bar from './Bar';

const ArrayComponent = ({ size, isSorting, setIsSorting }) => {
  const [arr, setArr] = useState([]);

  const generateArray = (size) => {
    return new Array(size).fill().map(() => Math.ceil(Math.random() * size));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setArr(generateArray(size));
    }, 300);

    return () => clearTimeout(timeout);
  }, [size]);

  const bubbleSort = (speed = 1) => {
    setIsSorting(true);

    const animations = bubbleSortAnimation([...arr]);

    const bars = document.querySelectorAll('.array--bar');

    const sortedArr = [...arr];

    for (let i = 0; i < animations.length; i++) {
      if (typeof animations[i] === 'number') {
        continue;
      }
      const { compare, swap } = animations[i];

      setTimeout(() => {
        bars[compare[0]].style.backgroundColor = 'red';
        bars[compare[1]].style.backgroundColor = 'red';

        if (swap) {
          let idx1 = swap[0],
            idx2 = swap[1];

          [sortedArr[idx1], sortedArr[idx2]] = [
            sortedArr[idx2],
            sortedArr[idx1],
          ];
          setArr([...sortedArr]);
        }
      }, i * speed);

      setTimeout(() => {
        bars[compare[0]].style.backgroundColor = 'white';
        if (typeof animations[i + 1] === 'number') {
          bars[compare[1]].style.backgroundColor = '#B300FF';
        } else {
          bars[compare[1]].style.backgroundColor = 'white';
        }
      }, (i + 1) * speed);
    }
    setTimeout(() => {
      bars.forEach((bar) => (bar.style.backgroundColor = '#4CFF00'));
      setIsSorting(false);
    }, (animations.length - 1) * speed);
  };

  const reset = () => {
    setArr(generateArray(size));
    document.querySelectorAll('.array--bar').forEach((element) => {
      element.style.backgroundColor = '#f2e7d5';
    });
  };

  return (
    <>
      <div className="array--container">
        {size === arr.length ? (
          arr.map((num, idx) => (
            <Bar
              key={idx}
              val={num}
              height={(num / size) * 100}
              width={100 / size}
            />
          ))
        ) : (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <div className="array--actions">
        <button className="btn reset" onClick={reset} disabled={isSorting}>
          Reset
        </button>
        <button
          className="btn"
          onClick={() => bubbleSort()}
          disabled={isSorting}
        >
          Bubble Sort
        </button>
        <button className="btn">Merge Sort</button>
      </div>
    </>
  );
};
export default ArrayComponent;
