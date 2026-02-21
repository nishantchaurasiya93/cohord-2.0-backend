const express=require('express');
const app=express();
const Port=3000;    
const notes=[]    
app.use(express.json());
app.post('/notes',(req,res)=>{
   console.log(req.body);
   notes.push(req.body);
    
   res.send('note created');
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})

app.listen(Port,()=>{
    console.log(`server is started ${Port}`);
})