import { WINNER_COMBOS } from "../modules/const/consts";

export default function checkWinner(boardToCheck) {
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
}
