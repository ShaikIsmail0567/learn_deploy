const express=require("express")
const noterouter=express.Router()
const {notemodel} = require("../model/note.model")

noterouter.get("/",async(req,res)=>{
    const user=req.body.user
    const notes= await notemodel.find({user})
    res.send(notes)
})
noterouter.post("/create",async(req,res)=>{
    const payload = req.body
    const note=new notemodel(payload)
    await note.save()
    // await notemodel.insertMany(payload)
    res.send({"msg":"Note created"})
})
noterouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    await notemodel.findByIdAndDelete({_id:noteID})
    res.send(`Note with ${noteID} has been deleted`)
})
noterouter.patch("/update/:id",async(req,res)=>{
    const noteID=req.params.id
    const payload=req.body
    await notemodel.findByIdAndUpdate({_id:noteID},payload)
    res.send(`Note with ${noteID} has been updated`)
})

module.exports={noterouter}