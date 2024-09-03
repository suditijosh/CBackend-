require('dotenv').config()
const express= require("express")
const app= express()
const port = 4000

app.get("/",(req,res)=>{
    res.send("app is working")          //get request krni h app ak slash / home route h usko listen kro jismai res, req hoga to jo slash mai agr koi request agr aati h to usko call back kr denge and usmai response mai send kr denge hello world
});

app.get("/twitter",(req,res)=>{
 res.send('suditi')
})
app.get("/login",(req,res)=>{
    res.send("<h1>Welcome to Telepathy</h1>")
})
app.get("/youtube",(req,res)=>{
    res.send("BACKEND WAY")
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`); // listen ki power bhi app se aati h 
});