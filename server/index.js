const express= require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const {connection} = require("./db/connection");



const app= express();

//configuring .env file
dotenv.config({path: "./.env"});

//Establishing Connection to Database
connection();

//Middleware
const middleware = (req,res,next)=>{
    console.log("Middleware Accessed");
    next();
}


//Routes
app.get("/",(req,res)=>{

    res.send("Welcome to Home Page");
});

app.get("/login",(req,res)=>{

    res.send("Welcome to LogIn Page");
});

app.get("/signup",(req,res)=>{

    res.send("Welcome to SignUp Page");
});

app.get("/about",middleware,(req,res)=>{
    console.log("About Us Accessed");
    res.send("Welcome to About Page");
});

app.get("/contact",(req,res)=>{

    res.send("Welcome to Contact Page");
});



//Listning to PORT
app.listen(5010, ()=>{
    console.log("Server Running on PORT 5010");
});
