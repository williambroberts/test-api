const express = require("express")

const app = express()


app.get("/",(req:any,res:any)=>{
    res.send("hi will now with ts")
})
app.listen(5000,()=>{
    console.log("ok done")
})