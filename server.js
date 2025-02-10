const express=require('express')
const app=express()
app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.status(200).json({info:'preset text'})
})
app.post('/',(req,res)=>{
    const {obj}=req.body;
    console.log(obj);
})
app.listen(4000,()=>{
    console.log(__dirname);
    console.log('server started running')
})