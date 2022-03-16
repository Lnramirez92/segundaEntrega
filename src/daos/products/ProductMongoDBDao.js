import ContainerMongoDB from "../../containers/ContainerMongoDB.js";
import productSchema from "../../schemas/ProductSchema.js";

export default class ProductMongoDBDao extends ContainerMongoDB{
    constructor(){
        super("products", productSchema);
    }
}