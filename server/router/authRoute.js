const express= require("express");
const Developer= require("../models/developerSchema");

const router= express.Router();

//Middleware Function
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

router.post("/signup",async (req,res)=>{

    try{
        const {name, phone, email,work, password, cpassword}= req.body;

        if(!name || !phone || !email || !work || !password|| !cpassword)
        return res.status().json({error: "Please fill all the fields"});

        const userExist= await Developer.findOne({email});
        
        if(userExist)
        return res.json({message: "User Already Exist"});

        const newDev= new Developer({name, phone, email,work, password, cpassword});

        await newDev.save();

        res.json({message:"User Successfully Registered"});

    }catch(err){
            console.log(err);
    }
    
});

router.get("/about",middleware,(req,res)=>{
    console.log("About Us Accessed");
    res.send("Welcome to About Page");
});

router.get("/contact",(req,res)=>{

    res.send("Welcome to Contact Page");
});

module.exports= router;