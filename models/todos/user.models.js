import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase  : true
    },
    email : {
        type : String,
        reqiured : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : [true , "Password required"]
    }
} , {timestamps : true})

export const User = mongoose.model("User", userSchema)