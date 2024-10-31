export default function Body({ imagen }) {
  return (
    <div className="flex flex-col w-full text-center bg-white shadow-lg p-8 h-3/5 items-center">
      <img src={imagen} className=" h-full rounded-sm"></img>
    </div>
  );
}
