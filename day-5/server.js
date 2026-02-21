require("dotenv").config()
const app =require("./src/app.js")
const mongoose=require("mongoose")
const Port=3000
function connectTodo(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongodb connected")
    })
}
connectTodo()
app.listen(Port,()=>{
    console.log("Server running on port 3000")
})