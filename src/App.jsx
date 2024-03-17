import { useState } from "react";
import Square from "./Components/Square";
import { array } from "zod";
import CalculateWinner from "./Components/CalculateWinner";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setX] = useState(false);
  const click = (i) => {
    let next = square.slice();
    if (next[i] || CalculateWinner(square)) {
      return;
    }
    isX ? (next[i] = "O") : (next[i] = "X");
    setX(!isX);
    setSquare(next);
  };
  const winner = CalculateWinner(square);
  let status;
  if (winner) {
    status = "Winner  : " + winner;
  } else {
    status = "Next Player : " + (isX ? "O" : "X");
  }
  return (
    <>
      <div className="font-bold text-2xl mt-10 w-full   flex justify-center">
        {status}
      </div>
      <div className="m-12 flex justify-center">
        <div>
          <Square
            value={square[0]}
            handleClick={() => {
              click(0);
            }}
          />
          <Square
            value={square[1]}
            handleClick={() => {
              click(1);
            }}
          />
          <Square
            value={square[2]}
            handleClick={() => {
              click(2);
            }}
          />
        </div>
        <div>
          <Square
            value={square[3]}
            handleClick={() => {
              click(3);
            }}
          />
          <Square
            value={square[4]}
            handleClick={() => {
              click(4);
            }}
          />
          <Square
            value={square[5]}
            handleClick={() => {
              click(5);
            }}
          />
        </div>
        <div>
          <Square
            value={square[6]}
            handleClick={() => {
              click(6);
            }}
          />
          <Square
            value={square[7]}
            handleClick={() => {
              click(7);
            }}
          />
          <Square
            value={square[8]}
            handleClick={() => {
              click(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
