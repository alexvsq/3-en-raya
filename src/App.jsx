import { useState, useEffect } from "react";

const TURNS = {
  X: "x",
  O: "o",
};
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checWinner = (boardToCheck) => {
  for (const iterator of WINNER_COMBOS) {
    const [a, b, c] = iterator;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};
const checkEndGame = (newBoard) => {
  return newBoard.every((x) => x !== null);
};
//const TABLE = Array(9).fill(null);

function WinnerModal({ winner, func }) {
  if (winner === null) return null;

  return (
    //blur bg
    <section className=" absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className=" bg-black/90 h-[200px] w-[200px] flex flex-col  justify-around items-center text-3xl text-center p-5 font-bold">
        Ganador es: {winner}
        <div
          onClick={() => func()}
          className=" bg-blue-600 px-3 py-2 m-1 flex justify-center items-center text-xl text-center font-bold"
        >
          <p className=" text-white">Reiniciar Juego</p>
        </div>
      </div>
    </section>
  );
}

function Square({ children, action, index }) {
  return (
    <div
      onClick={() => action(index)}
      className=" h-[80px] aspect-square border-red-100 border-[1px] flex justify-center items-center text-3xl font-bold"
    >
      {children}
    </div>
  );
}

function App() {
  const [turn, setTurn] = useState(TURNS.X);
  const [table, setTable] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  function handleClickBtn(index) {
    const newTable = [...table];
    if (newTable[index]) return;
    newTable[index] = turn;
    setTable(newTable);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checWinner(newTable);
    if (newWinner) {
      setWinner(newWinner);
      return null;
    } else if (checkEndGame(newTable)) {
      setWinner(null);
      setTable(Array(9).fill(null));
      setTurn(TURNS.X);
    }
  }

  const resetBoard = () => {
    setTable(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <>
      <div className=" flex flex-col gap-3 justify-center items-center h-screen">
        <div className=" grid grid-cols-3 ">
          {table.map((item, index) => (
            <Square key={index} index={index} action={handleClickBtn}>
              {item}
            </Square>
          ))}
        </div>
        <div className=" bg-gray-950 px-4 py-3 rounded text-2xl font-bold">
          Turno de : {turn}
        </div>
        <WinnerModal winner={winner} turn={turn} func={resetBoard} />
      </div>
    </>
  );
}

export default App;
