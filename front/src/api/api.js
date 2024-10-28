const get_players = (empresa, setJugadores) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "d13eg0t34m");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://localhost:5000/users/${empresa.toLowerCase()}`, requestOptions)
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
    `http://localhost:5000/premios/${empresa.toLowerCase()}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setPremios(result.premios))
    .catch((error) => console.log("error", error));
};

export default { get_players, get_premios };
