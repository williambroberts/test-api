"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const express = require("express");
const app = (0, app_1.createApp)();
// app.get("/",(req:any,res:any)=>{
//     res.send("hi will")
// })
app.listen(5000, () => {
    console.log("ok done");
});
