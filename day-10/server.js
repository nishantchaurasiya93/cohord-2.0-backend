require("dotenv").config()
const connectDb=require("./src/config/db")
const app=require("./src/app")
const Port=3000||5000
connectDb()
app.listen(Port,()=>{
    console.log(`Server started at port:${Port}`);
})