import express  from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"Hej"});
});

app.listen(3000,()=>{
    console.log("Server körs på http://localhost:3000");
});