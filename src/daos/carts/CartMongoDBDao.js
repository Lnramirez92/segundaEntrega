import ContainerMongoDB from "../../containers/ContainerMongoDB.js";
import cartSchema from "../../schemas/CartSchema.js";

const carritosApiMongo = new ContainerMongoDB("carts", cartSchema);

export default carritosApiMongo;