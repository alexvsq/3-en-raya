import Square from "../components/square";
import { TURNS } from "./const/consts";
import checkWinner from "../controllers/checkWinner";
import checkEndGame from "../controllers/checkEndGame";

export default function Tabla({ table, turn, setTurn, setTable, setWinner }) {
  function handleClickBtn(index) {
    const newTable = [...table];
    if (newTable[index]) return;
    newTable[index] = turn;
    setTable(newTable);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newTable);
    if (newWinner) {
      setWinner(newWinner);
      return null;
    } else if (checkEndGame(newTable)) {
      setWinner(null);
      setTable(Array(9).fill(null));
      setTurn(TURNS.X);
    }
  }

  return (
    <div className=" grid grid-cols-3 ">
      {table.map((item, index) => (
        <Square key={index} index={index} action={handleClickBtn}>
          {item}
        </Square>
      ))}
    </div>
  );
}
