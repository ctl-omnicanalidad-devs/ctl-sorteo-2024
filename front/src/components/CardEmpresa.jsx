export default function CardEmpresa({ setEmpresa, nombre, imagen }) {
  return (
    <div
      onClick={() => setEmpresa(nombre)}
      className=" my-2 flex flex-col text-4xl justify-center bg-gray-800 text-slate-100 items-center w-[33%] h-52 py-12 rounded-md hover:bg-gray-900 transition-all"
    >
      <img src={imagen} className=" h-28"></img>
      {/* <h1 className="pt-10">{nombre}</h1> */}
    </div>
  );
}
