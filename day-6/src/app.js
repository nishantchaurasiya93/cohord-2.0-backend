const express=require("express")
const NoteModel=require("./models/note.model")
const app=express()
app.use(express.json())
app.post("/note",async(req,res)=>{
    const{title,description}=req.body
    const note=await NoteModel.create({
        title,
        description
    })
    res.status(201).json({
       message:"Note created successfully",
       note
    })
})
app.get("/notes",async(req,res)=>{
  const notes=await NoteModel.find()
  res.status(200).json({
    message:"Notes fetching successfully",
    notes
  })  
})
app.patch("/note/:id",async(req,res)=>{
    const{description}=req.body
    const{id}=req.params    
    const updatedNote=await NoteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note updated successfully",
        updatedNote
    })
})
app.delete("/note/:id",async(req,res)=>{
const{id}=req.params
await NoteModel.findByIdAndDelete(id)
res.status(200).json({
    message:"Note deleted successfully",
})
})
module.exports=app