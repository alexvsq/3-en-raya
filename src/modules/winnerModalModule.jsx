import WinnerModal from "../components/winnerModal";
import { TURNS } from "./const/consts";

export default function WinnerModalModule({
  winner,
  setTable,
  setTurn,
  setWinner,
}) {
  const resetBoard = () => {
    setTable(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };
  return <WinnerModal winner={winner} func={resetBoard} />;
}
