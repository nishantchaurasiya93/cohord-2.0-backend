require("dotenv").config()
const app=require("./src/app")
const Port=3000
const connectDb=require("./src/config/db")
connectDb()
app.listen(Port,()=>{
console.log("Server is started at port:3000");
})