import mongoose from "mongoose";

export default new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    code: {type: String, required: true},
    img: {type: String},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    timestamp: {type: String, required: true}
});