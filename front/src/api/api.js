const get_players = (empresa, setJugadores) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "d13eg0t34m");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `${import.meta.env.VITE_API_URL}/users/${empresa.toLowerCase()}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setJugadores(result.participantes))
    .catch((error) => console.log("error", error));
};

const get_premios = (empresa, setPremios) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "d13eg0t34m");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `${import.meta.env.VITE_API_URL}/premios/${empresa.toLowerCase()}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setPremios(result.premios))
    .catch((error) => console.log("error", error));
};

const set_player_ganador = (user_email) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "d13eg0t34m");

  var raw = JSON.stringify({
    correo: user_email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/sorteado`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const set_premio_sorteado = (premio_id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "d13eg0t34m");

  var raw = JSON.stringify({
    id: premio_id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${import.meta.env.VITE_API_URL}/premios/sorteado`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default {
  get_players,
  get_premios,
  set_player_ganador,
  set_premio_sorteado,
};
