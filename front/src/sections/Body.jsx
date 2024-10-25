export default function Body({ imagen }) {
  return (
    <div className="flex flex-col w-full text-center bg-slate-100 shadow-lg p-8 h-1/2 items-center">
      <img src={imagen} className=" h-full rounded-sm"></img>
    </div>
  );
}
