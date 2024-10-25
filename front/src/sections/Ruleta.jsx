import MarcadorGanador from "../components/MarcadorGanador";
import Tira from "../components/Tira";

export default function Ruleta({ jugadores, numero }) {
  return (
    <div className="w-1/3 flex items-start">
      <Tira jugadores={jugadores} numero={numero} />
      <div className="flex items-center flex-col h-screen justify-center">
        <MarcadorGanador />
      </div>
    </div>
  );
}
