const express = require('express');
const app = express();
app.use(express.json());
const notes = []
app.post("/notes",(req,res)=>{
    const note=req.body
    notes.push(note)
    res.status(201).json({
        message:"Notes created successfully",
        data:notes
    })
})
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"Notes fetching successfully",
        data:notes
    })
})
app.delete("/notes/:indx",(req,res)=>{
    delete notes[req.params.indx]
    res.status(204).json({
        message:"Note deleted successfully",
    })
})
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description=req.body.description
    res.status(200).json({
        message:"Note updated successfully",
        data:notes
    })
})
module.exports = app;