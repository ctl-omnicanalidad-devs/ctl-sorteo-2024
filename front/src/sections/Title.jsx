export default function Title({ titulo }) {
  return (
    <div className="flex shadow-lg bg-slate-100 my-10 p-5 text-center w-full rounded-sm">
      <h1 className="w-full text-5xl">{titulo}</h1>
    </div>
  );
}
