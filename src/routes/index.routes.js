const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola Ruta Raiz");
});

module.exports = router;
