import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    productImage : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    cateogary : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cateogary",
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
} , {timestamps : true})

export const Product = mongoose.model("Product" , productSchema)