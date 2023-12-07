const mongoose=require("mongoose")
const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        usn:String,
        city:String,
})

module.exports=mongoose.model("userInfo",projectSchema)