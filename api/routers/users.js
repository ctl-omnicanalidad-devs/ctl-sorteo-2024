var express = require("express");
var router = express.Router();
var controller = require("../controllers/users");
const authToken = require("../middlewares/authToken");

router.get("/", authToken, controller.sayHello);
router.get("/ctl", authToken, controller.get_users_ctl);
router.get("/activia", authToken, controller.get_users_activia);
router.post("/add", authToken, controller.add_user);
router.post("/sorteado", authToken, controller.sorteado);

module.exports = router;
