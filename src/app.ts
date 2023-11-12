const express = require("express")


function createApp__app(){
const app = express();
app.get("/",(req:any,res:any)=>{
    res.json({success:true})
})
    return app;
}

module.exports = createApp__app 

