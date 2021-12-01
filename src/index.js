const express = require("express");

const indexRoutes = require("./routes/index.routes");
const app = express();

//--------parse applicacion
app.use(express.urlencoded({ extended: false }));
//parse aplication json
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
//express reconoce la carpeta public como la raiz de estaticos
app.use(express.static(__dirname + "/public"));

require("dotenv").config();
const port = process.env.PORT || 3005;

//conexion a ATLAS
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.1qixe.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Atlas conectado"))
  .catch((e) => console.log(e));

app.use("/", indexRoutes);
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto", port);
});
