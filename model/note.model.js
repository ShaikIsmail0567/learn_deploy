const mongoose=require("mongoose")

const noteschema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    user:{type:String}
})

const notemodel=mongoose.model("notes",noteschema)

module.exports={notemodel}