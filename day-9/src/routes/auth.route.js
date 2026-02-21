const express = require("express")
const User = require("../models/user.model")
const router = express.Router()
const jwt=require("jsonwebtoken")
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
    const user = await User.create({
        name, email, password
    })
    const existUser=async(req,res)=>{
        await User.findOne({email})
    }

    if(existUser){
        return res.status(409).json({
            message:"User already exist"
        })
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message: "User created successful",
        user,
        token
    })
})
module.exports = router