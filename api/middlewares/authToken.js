function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token || token !== "d13eg0t34m") {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }

  next();
}

module.exports = authenticateToken;
