const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

const Producto = require("../models/producto");

//Ruta pagina de inicio y su controller
router.get("/", productosController.inicio);
//Crear un producto
router.get("/crear", (req, res) => {
  res.render("crear");
});
router.post("/productos/", productosController.nuevoProducto);
//Ruta a todos los productos y su controller
router.get("/productos", productosController.mostrarProductos);
//Ruta a un unico producto por ID
router.get("/productos/:idProducto", productosController.mostrarProducto);
//Ruta para Editar un producto creado
router.put("/productos/:idProducto", productosController.editarProducto);
//Ruta para borrar un Producto
router.delete("/productos/:id", productosController.eliminarProducto);

module.exports = router;
