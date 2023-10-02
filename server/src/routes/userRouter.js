const express = require("express");
const router = express.Router()
const ctrl = require("../controllers/userController")

router.post("/create", ctrl.CreateUser)
router.post("/login", ctrl.login)

module.exports = router