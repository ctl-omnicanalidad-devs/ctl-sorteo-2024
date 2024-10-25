const executeQuery = require("../helpers/executeQuery");

const get_users = async (req, res, next) => {
  const consulta = "SELECT * FROM participantes";

  try {
    const results = await executeQuery(consulta);
    res.status(200).json({ participantes: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener participantes", error });
  }
};

const add_user = async (req, res, next) => {
  const consulta =
    "INSERT INTO participantes (nombre, apellido, correo, empresa) VALUES (?, ?, ?, ?)";

  const empresa = req.body.correo.endsWith("@ctl.com.ar") ? "CTL" : "ACTIVIA";
  const values = [req.body.nombre, req.body.apellido, req.body.correo, empresa];

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
  const consulta = "UPDATE participantes SET ganador = ? WHERE id = ?";
  const values = [1, req.body.correo];

  try {
    const results = await executeQuery(conexion, consulta, values);
    res.status(200).json({
      message: `Participante ${req.body.correo} marcado como ganador`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al marcar ganador", error });
  }
};

module.exports = {
  get_users,
  add_user,
  sorteado,
};
