function get_index(req, res, next) {
  res.json({ message: "Hello, world!" });
}

module.exports = {
  get_index,
};
