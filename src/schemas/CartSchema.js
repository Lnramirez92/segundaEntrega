import mongoose from "mongoose";

export default new mongoose.Schema({
    timestamp: {type: String, required: true},
    products: {type: Array, required: true}
});