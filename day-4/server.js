const app=require('./src/app');
const Port=3000;

app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
})  