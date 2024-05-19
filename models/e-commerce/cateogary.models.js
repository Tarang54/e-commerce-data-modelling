import mongoose from "mongoose";

const cateogarySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

}, {timestamps : true})

export const Cateogary = mongoose.model("Cateogary" , cateogarySchema)