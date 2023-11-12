import { createApp } from "./app"

const express = require("express")
//
const app = createApp();
// app.get("/",(req:any,res:any)=>{
//     res.send("hi will")
// })
app.listen(5000,()=>{
    console.log("ok done")
})