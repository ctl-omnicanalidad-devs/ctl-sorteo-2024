export default function CardEmpresa({ setEmpresa, nombre, imagen }) {
  return (
    <div
      onClick={() => setEmpresa(nombre)}
      className=" my-2 flex flex-col text-4xl justify-center bg-zinc-950 text-slate-100 items-center w-[33%] h-52 py-12 rounded-md hover:bg-zinc-900 transition-all"
    >
      <img src={imagen} className=" h-28"></img>
      {/* <h1 className="pt-10">{nombre}</h1> */}
    </div>
  );
}
