const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
  /* res.send("Hola Ruta Raiz"); */
});
router.get("/productos", (req, res) => {
  res.render("productos");
});

module.exports = router;
