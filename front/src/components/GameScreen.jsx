import Ruleta from "../sections/Ruleta";
import Main from "../sections/Main";
import { useState } from "react";

export default function GameScreen({
  jugadores,
  premios,
  setJugadores,
  empresa,
}) {
  const [numero, setNumero] = useState(0);
  return (
    <div className=" flex flex-row h-screen bg-black21-100">
      <Ruleta jugadores={jugadores} numero={numero} />
      <Main
        premios={premios}
        setJugadores={setJugadores}
        jugadores={jugadores}
        numero={numero}
        setNumero={setNumero}
      />
    </div>
  );
}
