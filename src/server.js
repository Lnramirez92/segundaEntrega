import express from "express";
import config from "./config.js";

import productsApiRouter from "./routers/ProductRouter.js";
// import cartApiRouter from "./routers/CartRouter.js";

const app = express();

//--------------------------------
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//--------------------------------
app.use("/api/productos", productsApiRouter);
// app.use("/api/carritos", cartApiRouter);



//--------------------------------
const connectedServer = app.listen(config.PORT, () => {
    console.log(`Servidor conectado y escuchando en el puerto ${connectedServer.address().port}`);
});
connectedServer.on("error", error => {
    console.log("Error al conectarse al servidor", error);
});