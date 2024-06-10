export default function checkEndGame(newBoard) {
  return newBoard.every((x) => x !== null);
}
