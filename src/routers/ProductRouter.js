import { Router } from "express";
import { productsDao } from "../daos/index.js";

// async function imprimir(){
//     console.log(await productsDao.getAll())
// }

// imprimir();

const productsRouter = new Router();


productsApiRouter.get("/", async (req, res) => {
    res.send("GET OK")
    // res.send(await productsDao.getAll());
})

// // // productsApiRouter.put("/:id", (req, res) => {
// // //     /////////
// // // })

// // // productsApiRouter.delete("/:id", (req, res) => {
// // //     /////////
// // // })

export default productsApiRouter;