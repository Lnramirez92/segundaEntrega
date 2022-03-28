import productosApiMongo from "./products/ProductMongoDBDao.js";
import productosApiFirebase from "./products/ProductFirebaseDao.js";
import productosApiArchivo  from "./products/ProductArchivoDao.js";

import carritosApiMongo from "./carts/CartMongoDBDao.js";
import carritosApiFirebase from "./carts/CartFirebaseDao.js";
import carritosApiArchivo from "./carts/CartArchivoDao.js"


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
else if(process.env.DB === "archivo"){
    productosApi = productosApiArchivo;
    carritosApi = carritosApiArchivo;
}

export { productosApi, carritosApi };