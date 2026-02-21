const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
const User=require("./models/user.model")
const authRouter=require("./routes/auth.route")
app.use(express.json())
app.use(cookieParser())
app.use("/api",authRouter)
module.exports=app