export default function WinnerModal({ winner, func }) {
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
