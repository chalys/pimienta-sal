const express = require("express");
const app = express();
const port = 3030;
const path = require("path");

/* Configuraciones*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));

/* Middleware*/
app.use(express.static("public"));

/* Rutas */
const otherRoutes = require("./routes/other.routes");
const menuRoutes = require("./routes/menu.routes");

/* Enrutadores*/
app.use("/",otherRoutes);
app.use("/menu", menuRoutes);

/* Servidor */
app.listen(port, () => console.log(`http://localhost:${port}`));