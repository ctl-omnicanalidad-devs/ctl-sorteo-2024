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
    <div className=" w-screen h-screen flex items-center justify-center bg-black21-100">
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  )
  );
}

export default App;