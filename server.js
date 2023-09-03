const express = require("express");
const app = express();

const cors = require("cors");

//Para usar json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL front end
        origin: "http://localhost:3000"
    })
)

//Inicializa Base de datos
require("./server/config/mongoose.config")

//Importamos rutas
const misRutas = require("./server/routes/producto.routes");

misRutas(app);

//Ejecutamos server
app.listen(8000, () => console.log ("servidor listo!"));