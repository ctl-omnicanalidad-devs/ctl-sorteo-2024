var express = require("express");
var router = express.Router();
var controller = require("../controllers/premios");
const authToken = require("../middlewares/authToken");

router.get("/", authToken, controller.sayHello);
router.get("/ctl", authToken, controller.get_premios_ctl);
router.get("/activia", authToken, controller.get_premios_activia);
router.post("/sorteado", authToken, controller.sorteado);

module.exports = router;
