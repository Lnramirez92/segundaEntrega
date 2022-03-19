import productosApiMongo from "./products/ProductMongoDBDao.js";
import productosApiFirebase from "./products/ProductFirebaseDao.js";
import carritosApiMongo from "./carts/CartMongoDBDao.js";
import carritosApiFirebase from "./carts/CartFirebaseDao.js";

let productosApi
let carritosApi

if(process.env.DB === "mongo"){
    productosApi = productosApiMongo;
    carritosApi = carritosApiMongo;
}
else if(process.env.DB === "firebase"){
    productosApi = productosApiFirebase;
    carritosApi = carritosApiFirebase;
}

export { productosApi, carritosApi };