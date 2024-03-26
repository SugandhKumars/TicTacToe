import Board from "./Board";

function App() {
  return (
    <div className="w-screen h-screen">
      <p className="text-center font-semibold text-3xl bg-zinc-300 p-2 text-blue-500 mb-[10vh]">
        Tic Tac Toe
      </p>
      <Board />
    </div>
  );
}

export default App;
