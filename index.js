const express = require("express")
const app=express()

const {connection}=require("./config/db")
const {userrouter}=require("./routes/user.route")
const {noterouter}=require("./routes/note.route")
const {authenticate}=require("./middleware/authenticate.middleware")
const cors=require("cors")

app.use(express.json())
app.use(cors())

app.use("/users",userrouter)
app.use(authenticate)
app.use("/notes",noterouter)



app.listen(8080,async()=>{
    try {
        await connection
        console.log("DB connected Successfully")
    } catch (error) {
        console.log(error.message)
    }
    console.log("Port is listening to 8080")
})