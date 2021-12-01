const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

const Producto = require("../models/producto");

//Ruta pagina de inicio y su controller
router.get("/", productosController.inicio);
//Crear un producto
router.post("/productos", productosController.nuevoProducto);
//Ruta a todos los productos y su controller
router.get("/productos", productosController.mostrarProductos);
//Ruta a un unico producto por ID
router.get("/productos/:idProducto", productosController.mostrarProducto);

module.exports = router;
