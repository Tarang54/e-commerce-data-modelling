import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    quantity : {
        type : Number,
        required : true
    }
})

const productSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems : {
        type : [orderItemsSchema]
    },
    address : {
        type : String,
        required :true
    },
    status : {
        type : String,
        enum : ["PENDING", "CANCELLED", "DELIVERED", "SHIPPED"],
        default : "PENDING"
    }
} , {timestamps : true})

export const Product = mongoose.model("Product" , productSchema)