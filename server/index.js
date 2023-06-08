const express= require("express");



const app= express();



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

app.get("/about",(req,res)=>{

    res.send("Welcome to About Page");
});

app.get("/contact",(req,res)=>{

    res.send("Welcome to Contact Page");
});



//Listning to PORT
app.listen(5010, ()=>{
    console.log("Server Running on PORT 5010");
});
