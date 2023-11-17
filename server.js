const express=require("express");
const app=express();
const path=require("path");

app.get("/siva",(req,res)=>{
    res.sendFile(path.join(__dirname,"1.html"));
})
app.get("/avis",(req,res)=>{
    res.sendFile(path.join(__dirname,"2.html"));
})
app.get("/srsi",(req,res)=>{
    res.sendFile(path.join(__dirname,"3.html"));
})
app.listen(3978 ,()=>{
    console.log("server is running");
})