import ContainerMongoDB from "../../containers/ContainerMongoDB.js";
import productSchema from "../../schemas/ProductSchema.js";

const productosApiMongo = new ContainerMongoDB("products", productSchema);

export default productosApiMongo;