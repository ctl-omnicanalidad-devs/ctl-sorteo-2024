const executeQuery = require("../helpers/executeQuery");

const sayHello = (req, res, next) => {
  res.status(200).json({ message: "Hello" });
};

const get_premios_ctl = async (req, res, next) => {
  const consulta = "SELECT * FROM premios WHERE empresa = 'CTL'";

  try {
    const results = await executeQuery(consulta);
    res.status(200).json({ participantes: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener premios", error });
  }
};

const get_premios_activia = async (req, res, next) => {
  const consulta = "SELECT * FROM premios WHERE empresa = 'ACTIVIA'";

  try {
    const results = await executeQuery(consulta);
    res.status(200).json({ participantes: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener premios", error });
  }
};

const sorteado = async (req, res, next) => {
  const consulta = "UPDATE premios SET sorteado = ? WHERE id = ?";
  const values = [1, req.body.id];

  try {
    const results = await executeQuery(conexion, consulta, values);
    res.status(200).json({
      message: `Premio ${req.body.id} marcado como entregado`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al marcar premio como entregado" });
  }
};

module.exports = {
  sayHello,
  get_premios_ctl,
  get_premios_activia,
  sorteado,
};
