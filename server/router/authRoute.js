const express= require("express");

const router= express.Router();

//Middleware
const middleware = (req,res,next)=>{
    console.log("Middleware Accessed");
    next();
}

//Routes
router.get("/",(req,res)=>{

    res.send("Welcome to Home Page");
});

router.get("/login",(req,res)=>{

    res.send("Welcome to LogIn Page");
});

router.post("/signup",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

router.get("/about",middleware,(req,res)=>{
    console.log("About Us Accessed");
    res.send("Welcome to About Page");
});

router.get("/contact",(req,res)=>{

    res.send("Welcome to Contact Page");
});

module.exports= router;