import { useState } from "react";
import { TURNS } from "./modules/const/consts";
import Tabla from "./modules/tablaModule";
import WinnerModalModule from "./modules/winnerModalModule";

function App() {
  const [turn, setTurn] = useState(TURNS.X);
  const [table, setTable] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  return (
    <>
      <div className=" flex flex-col gap-3 justify-center items-center h-screen">
        <Tabla
          table={table}
          turn={turn}
          setTurn={setTurn}
          setTable={setTable}
          setWinner={setWinner}
        />

        <div className=" bg-gray-950 px-4 py-3 rounded text-2xl font-bold">
          Turno de : {turn}
        </div>
        <WinnerModalModule
          winner={winner}
          setTable={setTable}
          setTurn={setTurn}
          setWinner={setWinner}
        />
      </div>
    </>
  );
}

export default App;
