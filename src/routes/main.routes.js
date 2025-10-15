const { Router }= require("express");
const router = Router();
const  mainController = require ("../controllers/main.controller.js");

router.get("/", mainController.index);

module.exports = router;