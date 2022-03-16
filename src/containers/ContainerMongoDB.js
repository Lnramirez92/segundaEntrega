import mongoose from "mongoose";
import config from "../config.js";
import moment from "moment";
// import cartSchema from "../schemas/CartSchema.js";

// const URL = "mongodb://localhost:27017/ecommerce"

mongoose.connect(config.mongoLocal.connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Base conectada"))
.catch(err => console.log("Error al conectarse a la base de datos", err))

export default class ContainerMongoDB {
    constructor(collectionName, schema){
        this.collection = mongoose.model(collectionName, schema);
    }

    async save(elem){
        try{
            const timestamp = moment(new Date()).format('DD/MM/YY HH:mm')
            elem.timestamp = timestamp;
            const doc = await this.collection.create(elem);
            return doc;
        }
        catch(err){
            console.log(err)
        }
    }

    async getById(id){
        try{
            const elem = await this.collection.findById(id);
            return elem;
        }
        catch(err){
            console.log(err);
        }
    }

    async getAll(){
        try{
            const data = await this.collection.find({});
            return data;
        }
        catch(err){
            console.log(err);
        }
    }

    async update(elem, id){
        try{
            const timestamp = moment(new Date()).format('DD/MM/YY HH:mm')
            elem.timestamp = timestamp;
            const newElem = {$set: elem};
            await this.collection.updateOne({_id: id}, newElem);
            console.log("Documento actualizado")
        }
        catch(err){
            console.log(err);
        }
    }

    async deleById(id){
        try{
            await this.collection.deleteOne({_id: id});
            console.log(`Documento con el id "${id}" eliminado con éxito`)
        }
        catch(err){
            console.log(err);
        }
    }

    async deleteAll(){
        try{
            await this.collection.deleteMany({});
            console.log("Todos los documentos fueron eliminados");
        }
        catch(err){
            console.log(err);
        }
    }
}



// let container = new ContainerMongoDB("carts", cartSchema);

// const prod1 = {
//     name: "Nike",
//     description: "Pantalon",
//     code: "zxc123",
//     img: "imagenpantalon",
//     price: 350,
//     stock: 50
// }

// const prod2 = {
//     name: "Adidas",
//     description: "Pantalon",
//     code: "zxc123",
//     img: "imagenpantalon",
//     price: 350,
//     stock: 50
// }

// const prod3 = {
//     name: "Puma",
//     description: "Pantalon",
//     code: "zxc123",
//     img: "imagenpantalon",
//     price: 350,
//     stock: 50
// }

// const prod4= {
//     name: "Reebok",
//     description: "Pantalon",
//     code: "zxc123",
//     img: "imagenpantalon",
//     price: 350,
//     stock: 50
// }

// const cart = {products: [prod1, prod2, prod3, prod4]};

// async function imprimir(){
//     let data = await container.getAll();
//     let productos = data.products;
//     console.log(data[0].products)
// }

// imprimir();