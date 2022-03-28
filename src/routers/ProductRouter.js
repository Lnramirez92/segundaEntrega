import { Router } from "express";
import { productosApi } from "../daos/index.js";

const productsApiRouter = new Router();

productsApiRouter.get("/", async (req, res) => {
    try {
        res.send(await productosApi.getAll());
    } catch (error) {
        console.log(error);
    }
});

productsApiRouter.post("/", async (req, res) => {
    if(process.env.admin === "true"){
        try {
            const body = req.body;
            await productosApi.save(body);
            console.log(`Se ha guardado el siguiente producto: ${JSON.stringify(body)}`);
            res.send("Producto guardado exitosamente");
        } catch (error) {
            console.log(error);
        } 
    }
    else{
        res.send({error: -1, descripcion: "método 'post' no autorizado." });
    }
});

productsApiRouter.put("/:id", async (req, res) => {
    if(process.env.admin === "true"){
        try {
            const id = req.params.id;
            const body = req.body;
            productosApi.update(body, id);
            console.log(`Producto con id "${id}" ha sido actualizado`);
            res.send(`Producto con id "${id}" ha sido actualizado`);
        } catch (error) {
            console.log(error);
        } 
    }
    else{
        res.send({error: -1, descripcion: "método 'post' no autorizado." });
    }
});

productsApiRouter.delete("/:id",async (req, res) => {
    if(process.env.admin === "true"){
        try {
            const id = req.params.id;
            await productosApi.deleteById(id);
            console.log(`Producto con id "${id}" ha sido eliminado`);
            res.send(`Producto con id "${id}" ha sido eliminado`);
        } catch (error) {
            console.log(error);
        } 
    }
    else{
        res.send({error: -1, descripcion: "método 'post' no autorizado." });
    }
});

export default productsApiRouter;