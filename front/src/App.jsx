import GameScreen from "./components/GameScreen";
import SelectorEmpresa from "./components/SelectorEmpresa";
import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";

const MOCKED_JUGADORES = {
  "participantes": [
      {
          "id": 2,
          "nombre": "Ramón Enrique",
          "apellido": "MORILLO AGUILAR",
          "correo": "ramon.aguilar@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 3,
          "nombre": "Lucas Nicolas",
          "apellido": "CASTAGNA AVILA",
          "correo": "lucas.castagna@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 4,
          "nombre": "Luis Miguel",
          "apellido": "PLAZAS SÁENZ",
          "correo": "luis.plazas@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 5,
          "nombre": "Matias Ruben",
          "apellido": "CELA DIAZ",
          "correo": "matias.celadiaz@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 6,
          "nombre": "Martín Federico",
          "apellido": "QUIÑONEZ",
          "correo": "martin.quinonez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 7,
          "nombre": "Andres Alejandro",
          "apellido": "GIANA",
          "correo": "andres.giana@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T12:37:18.446Z"
      },
      {
          "id": 8,
          "nombre": "ALAN",
          "apellido": "ALVAREZ",
          "correo": "alan.alvarez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T12:38:06.457Z"
      },
      {
          "id": 9,
          "nombre": "Daniel Alejandro",
          "apellido": "TAPIA",
          "correo": "daniel.tapia@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 10,
          "nombre": "Florencia",
          "apellido": "RIQUELME",
          "correo": "florencia.riquelme@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T15:18:19.645Z"
      },
      {
          "id": 11,
          "nombre": "Yanina Ariadna",
          "apellido": "CORRADO ESPINOLA",
          "correo": "yanina.corrado@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 12,
          "nombre": "Lucas David",
          "apellido": "Martínez",
          "correo": "lucas.martinez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 13,
          "nombre": "Maximiliano Alexis",
          "apellido": "Happar",
          "correo": "alexis.happar@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 14,
          "nombre": "Tomas Adrian Ramon",
          "apellido": "VITALE",
          "correo": "tomas.vitale@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 15,
          "nombre": "Lautaro Andres",
          "apellido": "SALAZAR",
          "correo": "lautaro.salazar@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T12:36:43.300Z"
      },
      {
          "id": 16,
          "nombre": "Martín Alejandro",
          "apellido": "MUÑOZ",
          "correo": "martin.munoz@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 17,
          "nombre": "Rodrigo Javier",
          "apellido": "MANQUILLAN",
          "correo": "rodrigo.manquillan@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 18,
          "nombre": "Julieta",
          "apellido": "ROJAS RICALDEZ",
          "correo": "julieta.rojas@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 19,
          "nombre": "Oscar Agustín",
          "apellido": "NARVAEZ",
          "correo": "oscar.narvaez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T12:36:20.816Z"
      },
      {
          "id": 20,
          "nombre": "SABRINA",
          "apellido": "CAVIGLIA ROMAN",
          "correo": "sabrina.roman@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 21,
          "nombre": "EDUARDO",
          "apellido": "KUVNAT",
          "correo": "eduardo.kuvnat@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 22,
          "nombre": "CARLOS MANUEL",
          "apellido": "PEREIRA DOMINGUEZ",
          "correo": "carlos.pereira@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 23,
          "nombre": "LAUTARO",
          "apellido": "ALCIONI",
          "correo": "lautaro.alcioni@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 24,
          "nombre": "IGNACIO",
          "apellido": "CASTRO",
          "correo": "ignacio.castro@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 25,
          "nombre": "AYARÍ",
          "apellido": "CONTRERAS",
          "correo": "ayari.contreras@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 26,
          "nombre": "SIMON",
          "apellido": "GALINDO",
          "correo": "simon.galindo@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 27,
          "nombre": "LUCIANA",
          "apellido": "ORTIZ",
          "correo": "luciana.ortiz@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T15:26:33.118Z"
      },
      {
          "id": 28,
          "nombre": "Joel",
          "apellido": "PAZ",
          "correo": "joel.paz@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 29,
          "nombre": "Gianlucca",
          "apellido": "PERLETTI",
          "correo": "gianlucca.perletti@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 30,
          "nombre": "Javier",
          "apellido": "Poblete",
          "correo": "javier.poblete@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 31,
          "nombre": "Yago",
          "apellido": "PAJARIÑO",
          "correo": "yago.pajarino@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T16:09:04.159Z"
      },
      {
          "id": 32,
          "nombre": "Cristian",
          "apellido": "CASTILLO",
          "correo": "cristian.castillo@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 33,
          "nombre": "Axel Nicolas",
          "apellido": "VALES",
          "correo": "axel.vales@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 34,
          "nombre": "MARIA VICTORIA",
          "apellido": "FERRARI",
          "correo": "victoria.ferrari@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 35,
          "nombre": "Alejandro",
          "apellido": "Araujo",
          "correo": "alejandro.araujo@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 36,
          "nombre": "Luis Alexander",
          "apellido": "Cabrera",
          "correo": "alexander.cabrera@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": "2023-11-16T15:26:05.271Z"
      },
      {
          "id": 37,
          "nombre": "Luciano",
          "apellido": "Di Stefano",
          "correo": "luciano.stefano@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 38,
          "nombre": "Alvaro Lisandro",
          "apellido": "Lopez",
          "correo": "alvaro.lopez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 39,
          "nombre": "Efrain",
          "apellido": "Baritto",
          "correo": "efrain.baritto@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 40,
          "nombre": "Diego",
          "apellido": "Fernandez",
          "correo": "maximiliano.fernandez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 41,
          "nombre": "Daniel",
          "apellido": "Álvarez",
          "correo": "daniel.alvarez@ctl.com.ar",
          "empresa": "CTL",
          "participa_en": null,
          "ganador": null
      },
      {
          "id": 44,
          "nombre": "Osvaldo",
          "apellido": "Camaño",
          "correo": "osvaldoc@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": "2023-11-16T15:36:27.186Z"
      },
      {
          "id": 45,
          "nombre": "Marcelo",
          "apellido": "Pedraza",
          "correo": "mpedraza@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": null
      },
      {
          "id": 46,
          "nombre": "Ezequiel",
          "apellido": "Cano",
          "correo": "ecano@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": "2023-11-16T16:10:31.124Z"
      },
      {
          "id": 47,
          "nombre": "Guillermo",
          "apellido": "Mariño",
          "correo": "gmarino@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": null
      },
      {
          "id": 48,
          "nombre": "Manuel",
          "apellido": "Gonzalez",
          "correo": "manuel.gonzalez@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": "2023-11-16T16:09:34.311Z"
      },
      {
          "id": 49,
          "nombre": "Pablo",
          "apellido": "Rodriguez",
          "correo": "pablor@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": null
      },
      {
          "id": 50,
          "nombre": "Victoria",
          "apellido": "Piccini",
          "correo": "victoria@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": null
      },
      {
          "id": 51,
          "nombre": "Santiago",
          "apellido": "Morel",
          "correo": "morel.f.santiago@gmail.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": "2023-11-16T16:10:10.140Z"
      },
      {
          "id": 52,
          "nombre": "Santiago",
          "apellido": "Langellotti",
          "correo": "Santiagol@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2]",
          "ganador": null
      },
      {
          "id": 53,
          "nombre": "Carolina",
          "apellido": "Otero",
          "correo": "carolina@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": null
      },
      {
          "id": 54,
          "nombre": "Ayelén",
          "apellido": "Vargas",
          "correo": "nataliayelenpunk@gmail.com",
          "empresa": "Activia",
          "participa_en": "[5,4,3,2,1]",
          "ganador": null
      },
      {
          "id": 55,
          "nombre": "Salvador",
          "apellido": "Felice",
          "correo": "spfelice@gmail.com",
          "empresa": "Activia",
          "participa_en": "[5,4,3]",
          "ganador": null
      },
      {
          "id": 56,
          "nombre": "Natalio",
          "apellido": "Riener",
          "correo": "natalioriener@gmail.com",
          "empresa": "Activia",
          "participa_en": "[5,4,3]",
          "ganador": null
      },
      {
          "id": 57,
          "nombre": "Óscar",
          "apellido": "Córdoba",
          "correo": "recepcion@activia.com.ar",
          "empresa": "Activia",
          "participa_en": "[5,4,3]",
          "ganador": "2023-11-16T15:41:57.091Z"
      },
      {
          "id": 58,
          "nombre": "Federico",
          "apellido": "De Donato",
          "correo": "federicodedonato657@gmail.com",
          "empresa": "Activia",
          "participa_en": "[5,4,3]",
          "ganador": "2023-11-16T16:09:52.475Z"
      },
      {
          "id": 59,
          "nombre": "Rosa",
          "apellido": "Cáceres",
          "correo": "caceresnariarosa3@gmail.com",
          "empresa": "Activia",
          "participa_en": "[5,4,3]",
          "ganador": "2023-11-16T16:10:49.703Z"
      }
  ]
}

const PREMIOS = {
  ctl:
  [
    {
      "nro": 1,
      "titulo": "Bebida (1)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 2,
      "titulo": "Bebida (2)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 3,
      "titulo": "Bebida (3)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 4,
      "titulo": "Bebida (4)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 5,
      "titulo": "Bebida (5)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 6,
      "titulo": "Bebida (6)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 7,
      "titulo": "Bebida (7)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 8,
      "titulo": "Bebida (8)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 9,
      "titulo": "Bebida (9)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 10,
      "titulo": "Bebida (10)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 11,
      "titulo": "Bebida (11)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 12,
      "titulo": "Bebida (12)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 13,
      "titulo": "Bebida (13)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 14,
      "titulo": "Bebida (14)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 15,
      "titulo": "Bebida (15)",
      "img_link": "bebidas.png"
    },
    {
      "nro": 16,
      "titulo": "Tablet Samsung",
      "img_link": "tablet.png"
    },
    {
      "nro": 17,
      "titulo": "Tarjeta Recargable $50.000 (1)",
      "img_link": "tarjeta.png"
    },
    {
      "nro": 18,
      "titulo": "Tarjeta Recargable $50.000 (2)",
      "img_link": "tarjeta.png"
    },
    {
      "nro": 19,
      "titulo": "Tarjeta Recargable $50.000 (3)",
      "img_link": "tarjeta.png"
    },
    {
      "nro": 20,
      "titulo": "Tarjeta Recargable $50.000 (4)",
      "img_link": "tarjeta.png"
    },
    {
      "nro": 21,
      "titulo": "Cafetera Nespresso",
      "img_link": "cafetera.png"
    },
    {
      "nro": 22,
      "titulo": "Headsets",
      "img_link": "headset.png"
    },
    {
      "nro": 23,
      "titulo": "Silla Gamer",
      "img_link": "silla.png"
    },
    {
      "nro": 24,
      "titulo": "Bici Mountain Bike",
      "img_link": "bici.png"
    },
    {
      "nro": 25,
      "titulo": "Smart TV 4K",
      "img_link": "tv.png"
    }
  ],
  activia: [
    {
      "nro": 1,
      "titulo": "Gift Card Sportline",
      "img_link": "card.png"
    },
    {
      "nro": 2,
      "titulo": "MIXER",
      "img_link": "mixer.png"
    },
    {
      "nro": 3,
      "titulo": "PAVA ELECTRICA",
      "img_link": "pava.png"
    },
    {
      "nro": 4,
      "titulo": "CELULAR",
      "img_link": "celular.png"
    },
    {
      "nro": 5,
      "titulo": "NOTEBOOK",
      "img_link": "notebook.png"
    }
  ]
}

function App() {
  const [empresa, setEmpresa] = useState("")
  const [jugadores, setJugadores] = useState([])
  const [premios, setPremios] = useState([])

  const get_players = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "d13eg0t34m");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/users", requestOptions)
      .then(response => response.json())
      .then(result => setJugadores(result.participantes))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    get_players()
  }, [])

  // useEffect(() => {
  //   // Borrar esto
  //   setJugadores(MOCKED_JUGADORES.participantes)
  // }, [])

  // useEffect(() => {
  //   console.log(jugadores)
  // }, [jugadores])

  
  useEffect(() => {
    if (empresa != "") {
      setJugadores(jugadores.filter(jugador => jugador.empresa == empresa))
      empresa == "CTL" ? setPremios(PREMIOS.ctl) : setPremios(PREMIOS.activia)

      // var myHeaders = new Headers();
      // myHeaders.append("Authorization", "d13eg0t34m");

      // var requestOptions = {
      //   method: 'GET',
      //   headers: myHeaders,
      //   redirect: 'follow'
      // };

      // fetch("http://localhost:5000/users", requestOptions)
      //   .then(response => response.json())
      //   .then(result => setJugadores(result.participantes))
      //   .catch(error => console.log('error', error));
    }
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