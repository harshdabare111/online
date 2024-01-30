const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/project').then(p=>console.log("sucess"))
.catch(err=>console.log(err))

const schema=mongoose.Schema({
    "name":"String",
    "address":"String",
    "username":"String",
    "password":"String"

})
const model=mongoose.model('table3',schema)
module.exports=model
// model.find().then(p=>console.log(p).catch(err=>console.log))