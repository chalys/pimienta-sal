const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menu");

router.get("/detalle/:id", menuController.menu);

module.exports = router;