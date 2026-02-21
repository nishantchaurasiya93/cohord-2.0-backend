const express = require("express")
const app = express()
const path=require("path")
const NoteModel = require("./models/note.model")
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use(express.static(path.join('./public')));
app.post("/note", async (req, res) => {
  const{title,description}=req.body
  const note=await NoteModel.create({title,description})
  res.status(201).json({
    message:"Note created successful",
    note
  })
  
})
app.get("/notes",async(req,res)=>{
const notes=await NoteModel.find()
res.status(200).json({
 message:"Notes fetched successful",
 notes
})
})
app.patch("/note/:id",async(req,res)=>{
    const{id}=req.params
    const{description}=req.body
    const updateNote=await NoteModel.findByIdAndUpdate(id,{description},{new:true})
    res.status(200).json({
        message:"Note updated successful",
        updateNote
    })
})
app.delete("/note/:id",async(req,res)=>{
    const{id}=req.params
    await NoteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successful"
    })
})
app.use("*name",async(req,res)=>{
   res.sendFile(path.join(__dirname, "../public", "index.html"))
})
module.exports = app