import React, { useState } from "react";
import Square from "./Square";
import { p } from "doker/lib/mixins/formatting";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function isWinner() {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winner.length; i++) {
      let [a, b, c] = winner[i];
      if (
        value[a] !== null &&
        value[a] === value[b] &&
        value[b] === value[c] &&
        value[a] === value[c]
      ) {
        return value[a];
      }
    }
    return null; // If no winner is found
  }

  const winner = isWinner();
  const isBoardFull = value.every((val) => val !== null); // Check if all squares are filled

  const handleClick = (index) => {
    if (value[index] != null || winner !== null) {
      return;
    }
    let newData = [...value];
    newData[index] = isX ? "X" : "O";
    setValue(newData);
    setIsX(!isX);
  };

  const resetGame = () => {
    setValue(Array(9).fill(null));
  };

  return (
    <>
      <div className="Board  ">
        {winner ? (
          <div className="flex  items-center justify-center gap-2">
            <p className="text-2xl">{winner} is the Winner</p>
            <button
              onClick={resetGame}
              className="px-1 py-2 bg-blue-300 rounded-lg"
            >
              Play Again
            </button>
          </div>
        ) : isBoardFull ? ( // Check if all squares are filled and no winner
          <div className="flex  items-center justify-center gap-2">
            <p className="text-2xl">No Result</p>
            <button
              onClick={resetGame}
              className="px-1 py-2 bg-blue-300 rounded-lg"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <p className="text-center mb-2 text-2xl">
              {isX ? "X" : "O"} Player Turn
            </p>
            <div className="Container flex justify-center ">
              <Square handleClick={() => handleClick(0)} value={value[0]} />
              <Square handleClick={() => handleClick(1)} value={value[1]} />
              <Square handleClick={() => handleClick(2)} value={value[2]} />
            </div>
            <div className="Container flex justify-center">
              <Square handleClick={() => handleClick(3)} value={value[3]} />
              <Square handleClick={() => handleClick(4)} value={value[4]} />
              <Square handleClick={() => handleClick(5)} value={value[5]} />
            </div>
            <div className="Container flex justify-center">
              <Square handleClick={() => handleClick(6)} value={value[6]} />
              <Square handleClick={() => handleClick(7)} value={value[7]} />
              <Square handleClick={() => handleClick(8)} value={value[8]} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Board;
