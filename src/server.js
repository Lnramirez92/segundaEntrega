import express from "express";
import config from "./config.js";
import productsApiRouter from "./routers/ProductRouter.js";
import cartApiRouter from "./routers/CartRouter.js";

const app = express();

//--------------------------------
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//------------RUTAS---------------
app.use("/api/productos", productsApiRouter);
app.use("/api/carrito", cartApiRouter);

//------------ERROR---------------
app.use('*', (req, res) =>
    res.status(404).json({
        error: -2,
        description: `ruta ${req.originalUrl} método ${req.method} no implementado`,
    })
);

//--------------------------------
const connectedServer = app.listen(config.PORT, () => {
    console.log(`Servidor conectado y escuchando en el puerto ${connectedServer.address().port}`);
});
connectedServer.on("error", error => {
    console.log("Error al conectarse al servidor", error);
});