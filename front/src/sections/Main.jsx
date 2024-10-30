import Title from "./Title";
import Body from "./Body";
import { useEffect, useState } from "react";
import DisplayGanador from "../components/DisplayGanador";
import api from "../api/api.js"

function getRandomInt(from, to) {
  // Make sure from and to are integers
  from = Math.ceil(from);
  to = Math.floor(to);

  // Calculate the random integer within the specified range
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export default function Main({
  premios,
  setJugadores,
  jugadores,
  numero,
  setNumero
}) {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [puedoJugar, setPuedoJugar] = useState(true);

  const [ganador, setGanador] = useState(false);
  const [ultimoGanador, setUltimoGanador] = useState(0);

  const getGanador = () => {
    const divs = new Array(...document.querySelectorAll(".tile_jugador"));

    const posiblesGanadores = divs.filter(
      (i) =>
        i.getAttribute("key_number") >= ultimoGanador + 50 && i.getAttribute("puede_ganar") == 1
    );
    const index_ganador = getRandomInt(
      0,
      Math.min(200, posiblesGanadores.length - 1)
    );

    const tile_ganador = posiblesGanadores[index_ganador];
    return tile_ganador;
  };

  useEffect(() => {
    if (numero >= 0 && numero < premios.length) {
      setTitulo(premios[numero].titulo);
      setImagen(premios[numero].img);
    }
  }, [numero]);

  const runTira = () => {
    setPuedoJugar(false);
    console.log("here");
    const tira = document.querySelector("#tira_jugadores");
    // tira.classList.toggle("moverse")

    const tile_ganador = getGanador();
    const translate_value_x = tile_ganador.getAttribute("offset_px");
    tira.style.transform = `translate(0px, ${translate_value_x}px)`;

    const window_size = window.innerHeight;
    const tiempo = document.documentElement.style.getPropertyValue("--tiempo");
    setTimeout(() => {
      const elemento_ganador = document.elementFromPoint(5, window_size / 2);
      setGanador({
        nombre: elemento_ganador.textContent,
        id: elemento_ganador.getAttribute("user_id"),
      });
      setUltimoGanador(Number(elemento_ganador.getAttribute("key_number")));
      setPuedoJugar(true);
    }, 5000);
  };

  useEffect(() => {
    if (ganador != false) {
      api.set_player_ganador(ganador.id)
      api.set_premio_sorteado(premios[numero].id)
      setJugadores(jugadores.filter((i) => i.correo != ganador.id));
    }
  }, [ganador]);

  return (
    <div className=" w-2/3 mr-5 flex">
      {ganador ? (
        <DisplayGanador
          ganador={ganador}
          premio={titulo}
          setGanador={setGanador}
          setNumero={setNumero}
          numero={numero}
          setUltimoGanador={setUltimoGanador}
          cantidadJugadas={premios.length}
        />
      ) : (
        ""
      )}

      <div className="w-full">
        <Title titulo={titulo} />
        <Body imagen={imagen} />
        <div className="flex w-full justify-evenly mt-12">
          <button
            className="button-40"
            onClick={() => runTira()}
            disabled={!puedoJugar}
          >
            Jugar
          </button>
        </div>
      </div>
    </div>
  );
}
