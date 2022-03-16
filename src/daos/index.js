import dotenv from "dotenv";
dotenv.config({path: "../../.env"})

let productsDao

if(process.env.DB === "mongo"){
    const { default : ProductMongoDBDao } = await import("../daos/products/ProductMongoDBDao.js");
    productsDao = new ProductMongoDBDao();
}

export {productsDao};