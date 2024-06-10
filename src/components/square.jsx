export default function Square({ children, action, index }) {
  return (
    <div
      onClick={() => action(index)}
      className=" h-[80px] aspect-square border-red-100 border-[1px] flex justify-center items-center text-3xl font-bold"
    >
      {children}
    </div>
  );
}
