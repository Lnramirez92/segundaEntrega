import { Router } from "express";
import { carritosApi } from "../daos/index.js"
import { productosApi } from "../daos/index.js";

const carritosApiRouter = new Router();

carritosApiRouter.post("/", async (req, res) => {
    try {
        await carritosApi.save({products: []});
        res.send("Carrito creado con exito");
    } catch (error) {
        console.log(error);
    }
});

carritosApiRouter.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await carritosApi.deleteById(id);
        console.log(`Carrito con id "${id}" ha sido eliminado`);
        res.send(`Carrito con id "${id}" ha sido eliminado`);
    } catch (error) {
        console.log(error);
    }
})

carritosApiRouter.get("/:id/productos", async (req, res) =>{
    try {
        const id = req.params.id;
        const elem = await carritosApi.getById(id);
        res.send(elem.products);
    } catch (error) {
        console.log(error);
    }
});

carritosApiRouter.post("/:id/productos/:id_prod", async (req, res) => {
    try {
        const idCarrito = req.params.id;
        const idProducto = req.params.id_prod;
        const prod = await productosApi.getById(idProducto);
        const carrito = await carritosApi.getById(idCarrito);
        let prodsCarrito = carrito.products;
        prodsCarrito.push(prod);
        await carritosApi.update({products: prodsCarrito}, idCarrito);        
        console.log(`Carrito con id "${idCarrito}" ha sido actualizado`);
        res.send(`Carrito con id "${idCarrito}" ha sido actualizado`);
    } catch (error) {
        console.log(error);
    }
});

carritosApiRouter.delete("/:id/productos/:id_prod", async (req, res) => {
    try {
        const idCarrito = req.params.id;
        const idProducto = req.params.id_prod;
        const carrito = await carritosApi.getById(idCarrito);
        let prodsCarrito = carrito.products;
        const index = prodsCarrito.findIndex(objeto => objeto.id == idProducto);
        prodsCarrito.splice(index, 1);
        await carritosApi.update(prodsCarrito, idCarrito);

        console.log(`Se ha eliminado el producto con id "${idProducto}" del Carrito con id "${idCarrito}"`);
        res.send(`Se ha eliminado el producto con id "${idProducto}" del Carrito con id "${idCarrito}"`);
    } catch (error) {
        console.log(error);
    }
});

export default carritosApiRouter;