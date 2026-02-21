const mongoose=require("mongoose")
const connectDb=async()=>{
await mongoose.connect(process.env.MONGO_URI)
.then(()=>{
        console.log("Mongodb connected successfull");
})}
module.exports=connectDb