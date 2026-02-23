const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:[true,"email already exist woth this email"],
    },
    password:{
        type:String
    }
})

const UserModel=mongoose.model("User",userSchema)
module.exports=UserModel