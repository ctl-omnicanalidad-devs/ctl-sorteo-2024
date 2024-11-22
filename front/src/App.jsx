import GameScreen from "./components/GameScreen";
import SelectorEmpresa from "./components/SelectorEmpresa";
import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";
import api from "./api/api.js";

function App() {
  const [empresa, setEmpresa] = useState("")
  const [jugadores, setJugadores] = useState([])
  const [premios, setPremios] = useState([])
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if (empresa == "") return
    api.get_players(empresa, setJugadores)
    api.get_premios(empresa, setPremios)
  }, [empresa])
  
  useEffect(() => {
    if (password == "") return
    password == "sorteofindeaño2024" ? setAuth(true) : setAuth(false)
  }, [password])

  return (
    auth ? (empresa == "" ?
      <SelectorEmpresa setEmpresa={setEmpresa} /> :
      jugadores.length == 0 || premios.length == 0? 
        <Spinner texto={"Cargando jugadores"} /> :
        <GameScreen jugadores={jugadores} setJugadores={setJugadores} premios={premios} empresa={empresa}/> 
  ) : (
    <div className=" w-screen h-screen flex items-center justify-center flex-col bg-black21-100">
      <p className="my-8 text-white text-4xl">Completa el formulario para participar del sorteo</p>
      <img src="https://raw.githubusercontent.com/ctl-omnicanalidad-devs/ctl-sorteo-2024/refs/heads/main/front/public/frame.png" className="w-[600px]"></img>
      <button className="bg-black text-white px-4 py-2 rounded-lg my-8" onClick={() => setPassword("sorteofindeaño2024")}>Ingresar</button>
    </div>
  )
  );
}

export default App;