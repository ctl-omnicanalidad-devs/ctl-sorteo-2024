export default function Title({ titulo }) {
  return (
    <div className="flex my-10 py-8 px-5 text-center w-full bg-black text-white font-bold text-2xl">
      <h1 className="w-full text-5xl">{titulo.toUpperCase()}</h1>
    </div>
  );
}
