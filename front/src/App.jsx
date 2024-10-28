import GameScreen from "./components/GameScreen";
import SelectorEmpresa from "./components/SelectorEmpresa";
import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";
import api from "./api/api.js";

function App() {
  const [empresa, setEmpresa] = useState("")
  const [jugadores, setJugadores] = useState([])
  const [premios, setPremios] = useState([])

  useEffect(() => {
    if (empresa == "") return
    api.get_players(empresa, setJugadores)
    api.get_premios(empresa, setPremios)
  }, [empresa])
  
  return (
    empresa == "" ?
      <SelectorEmpresa setEmpresa={setEmpresa} /> :
      jugadores.length == 0 || premios.length == 0? 
        <Spinner texto={"Cargando jugadores"} /> :
        <GameScreen jugadores={jugadores} setJugadores={setJugadores} premios={premios} empresa={empresa}/> 
  );
}

export default App;