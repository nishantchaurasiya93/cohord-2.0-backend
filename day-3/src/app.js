const express=require('express');
const app=express();
const notes = []
app.use(express.json());
app.post("/notes", (req, res) => {
    const note = req.body;
    notes.push(note);
    res.send("Note created successfully");
})
app.get("/notes", (req, res) => {
    res.send(notes);
})
app.patch("/notes/:index", (req, res) => {
console.log(req.params);
 res.send("Note updated successfully")
})
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("Note deleted successfully");
})



module.exports=app;