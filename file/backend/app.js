const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const model=require('./db.js')

app.use(bodyparser.json())
app.use(cors())

app.get("/",(req,res)=>{
    model.find().then(p=>res.send(p)).catch(err=>console.log)
})

app.post("/",(req,res)=>{


const data=new model(
    {
        "name":req.body.name,
        "address":req.body.address,
        "username":req.body.username,
        "password":req.body.password
    }
)
data.save().then(p=>res.send({"message":"data save"})).catch(err=>console.log(err))




})
app.post("/login",(req,res)=>
{

model.find({"username":req.body.username}).then(p=>{

if((p[0].username===req.body.username) &&  (p[0].password===req.body.password))
{


    res.send({"message":"suceesfully login"})
}else{

res.send({"message":"login failed"})

}
}).catch(err=>res.send({"message":"invalid user"}))
})

app.listen(3500)