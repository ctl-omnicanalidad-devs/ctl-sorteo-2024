import JSConfetti from "js-confetti";

export default function Ganador({
  ganador,
  premio,
  setGanador,
  setNumero,
  numero,
  cantidadJugadas,
}) {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    confettiColors: ["#33b3fa", "#fd3e9b", "#030405"],
  });

  const siguiente_juego = () => {
    setNumero(numero + 1);
    setGanador(false);
  };

  return (
    <div className=" absolute top-0 left-0 flex items-center justify-center w-full h-full backdrop-blur-sm">
      <div className=" h-1/2 py-12 px-16 bg-slate-200 rounded-lg border border-gray-300 text-center flex flex-col items-center  justify-evenly">
        <h1 className=" text-8xl mb-10">{ganador.nombre}</h1>
        <p className=" text-6xl mb-10">Ganaste {premio}</p>
        <button
          className="button-40 disabled:bg-slate-500"
          onClick={siguiente_juego}
          disabled={numero == cantidadJugadas - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}