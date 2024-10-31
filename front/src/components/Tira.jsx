import { useEffect, useState } from "react";

const repeat = (arr, n) => [].concat(...Array(n).fill(arr));

// Funciones getters de atributos jugador
const get_nombre = (jugador) => {
  return jugador.nombre + " " + jugador.apellido;
};

const get_user_id = (jugador) => {
  return jugador.correo;
};

const TIEMPO = 30; // Segundos en dar una vuelta
const cantidadTiles = 8000;

export default function Tira({ jugadores, numero }) {
  const [mostrados, setMostrados] = useState(
    new Array(...repeat(jugadores, Math.ceil(cantidadTiles / jugadores.length)))
  );

  const window_size = window.innerHeight;

  useEffect(() => {
    setMostrados(
      new Array(
        ...repeat(jugadores, Math.ceil(cantidadTiles / jugadores.length))
      )
    );
  }, [jugadores]);

  useEffect(() => {
    const tira = document.querySelector("#tira_jugadores");
    const size = tira.offsetHeight;
    const window_size = window.innerHeight;
    document.documentElement.style.setProperty(
      "--size_of_tira",
      -size + window_size + "px"
    );
    // document.documentElement.style.setProperty('--tiempo', TIEMPO * REPETICIONES + "s");
  }, []);

  const colores = ["#33b3fa", "#fd3e9b", "#030405"];

  return (
    <div
      id="tira_jugadores"
      className=" relative top-0 flex flex-col justify-start w-3/4"
    >
      {mostrados.map((jugador, index) => {
        const div_h = 80;
        return (
          <div
            key_number={index}
            puede_ganar={jugador.habilitado}
            offset_px={-index * div_h - div_h / 2 + window_size / 2}
            user_id={get_user_id(jugador)}
            empresa={jugador.empresa}
            equipo={jugador.equipo}
            className=" h-20 py-6 text-center text-white text-xl flex flex-col tile_jugador"
            style={{ backgroundColor: colores[index % 3] }}
          >
            {get_nombre(jugador)}
          </div>
        );
      })}
    </div>
  );
}
