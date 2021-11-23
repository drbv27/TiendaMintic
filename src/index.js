const express = require("express");

const indexRoutes = require("./routes/index.routes");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3005;

//conexion a ATLAS
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.mzxff.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Atlas conectado"))
  .catch((e) => console.log(e));

app.use("/", indexRoutes);
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto", port);
});
