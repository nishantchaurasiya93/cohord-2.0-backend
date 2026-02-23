const express=require("express")
const router=express.Router()
const crypto=require("crypto")
const jwt=require("jsonwebtoken")
const UserModel=require("../models/user.model")
router.post("/register",async(req,res)=>{
    const{name,email,password}=req.body
 
  
    const existUser=await UserModel.findOne({email})
    if(existUser){
        return res.status(409).json({
            message:"User already exist with this email"
        })
    }
    const hashedPassword=crypto.createHash("md5").update(password).digest("hex")
    const user=await UserModel.create({
        name,
        email,
        password:hashedPassword
    })
     const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
     res.cookie("token",token)
     res.status(201).json({
        message:"User register successful",
        user
     })
})
router.post("/protected",async(req,res)=>{
  const{token}=req.cookies
  console.log(token)
  return res.status(200).json({
    message:"Token created",
    token
  })
  
})
router.post("/login",async(req,res)=>{
const{email,password}=req.body
const user=await UserModel.findOne({email})
if(!user){
    return res.status(404).json({
        message:"User not found"
    })
}
const isPasswordCorrect=user.password=crypto.createHash("md5").update(password).digest("hex")
if(!isPasswordCorrect){
    return res.status(401).json({
        message:"Invalid password"
    })
}

const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
res.cookie("token",token)

res.status(200).json({
    message:"Login successful",
    user,
})
})
module.exports=router