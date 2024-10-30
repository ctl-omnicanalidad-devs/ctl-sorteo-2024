const executeQuery = require("../helpers/executeQuery");

const sayHello = (req, res, next) => {
  res.status(200).json({ message: "Hello" });
};

const get_users_ctl = async (req, res, next) => {
  const consulta =
    "SELECT * FROM participantes WHERE empresa = 'CTL' AND ganador = 0;";

  try {
    const results = await executeQuery(consulta);
    res.status(200).json({ participantes: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener participantes", error });
  }
};

const get_users_activia = async (req, res, next) => {
  const consulta =
    "SELECT * FROM participantes WHERE empresa = 'ACTIVIA' AND ganador = 0";

  try {
    const results = await executeQuery(consulta);
    res.status(200).json({ participantes: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener participantes", error });
  }
};

const checkHabilitado = async (correo) => {
  const consulta = `SELECT * FROM blacklist WHERE correo = ?`;
  const values = [correo];

  try {
    const results = await executeQuery(consulta, values);
    if (results.length === 0) return true;
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const checkInvitado = async (correo) => {
  const consulta = `SELECT * FROM invitados WHERE email = ?`;
  const values = [correo];

  try {
    const results = await executeQuery(consulta, values);
    if (results.length === 0) return false;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const add_user = async (req, res, next) => {
  const isInvitado = await checkInvitado(req.body.correo);
  if (!isInvitado) {
    return res.status(400).json({
      message: `El correo ${req.body.correo} no se encuentra invitado`,
    });
  }
  const isHabilitado = await checkHabilitado(req.body.correo);

  const consulta =
    "INSERT INTO participantes (nombre, apellido, correo, empresa, ganador, habilitado) VALUES (?, ?, ?, ?, ?, ?)";

  const empresa = req.body.correo.endsWith("@ctl.com.ar") ? "CTL" : "ACTIVIA";
  const values = [
    req.body.nombre,
    req.body.apellido,
    req.body.correo,
    empresa,
    0,
    isHabilitado,
  ];

  try {
    const results = await executeQuery(consulta, values);
    res
      .status(200)
      .json({ message: `Participante ${req.body.correo} guardado` });
  } catch (error) {
    console.error(error);
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({
        message: `El correo ${req.body.correo} ya se encuentra registrado`,
      });
    }
    res.status(500).json({ message: "Error al guardar participante", error });
  }
};

const sorteado = async (req, res, next) => {
  const consulta = "UPDATE participantes SET ganador = ? WHERE correo = ?";
  const values = [1, req.body.correo];

  try {
    const results = await executeQuery(consulta, values);
    res.status(200).json({
      message: `Participante ${req.body.correo} marcado como ganador`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al marcar ganador", error });
  }
};

module.exports = {
  sayHello,
  get_users_ctl,
  get_users_activia,
  add_user,
  sorteado,
};
