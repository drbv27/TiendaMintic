const Productos = require("../models/producto");

//REST Sugiere que los verbos y sus rutas se ordenen POST GETs GET PUT(PATCH) DELETE
//Ruta del index
exports.inicio = async (req, res, next) => {
  try {
    res.render("index");
  } catch (error) {
    console.log(error);
    next();
  }
};
//Crear un nuevo producto con POST
exports.nuevoProducto = async (req, res, next) => {
  const producto = new Productos(req.body);
  try {
    await producto.save();
    res.json({
      message: "Se agregó el producto correctamente",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
//Mostrar todos los productos
exports.mostrarProductos = async (req, res, next) => {
  try {
    const arrayProductosDB = await Productos.find();
    /* console.log(arrayProductosDB); */

    res.render("productos", {
      arrayProductos: arrayProductosDB,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.mostrarProducto = async (req, res, next) => {
  try {
    const producto = await Productos.findById(req.params.idProducto);
    res.json(producto);
  } catch (error) {
    console.log(error);
    next();
  }
};
