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

router.post("/login",async(req,res)=>{
    try {

        const {email, password}= req.body;

        if(!email || !password)
        return res.status(422).json({error: "Please fill all the fields"});

        const userExist= await Developer.findOne({email});

        if(!userExist)
        return res.status(404).json({message: "Invalid Credentials"});

        if(password!=userExist.password)
        return res.status(400).json({message: "Invalid Credentials"});
        else
        return res.status(200).json({message: "Welcome"});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
        
    }
    
});

router.post("/signup",async (req,res)=>{

    try{
        const {name, phone, email,work, password, cpassword}= req.body;

        if(!name || !phone || !email || !work || !password|| !cpassword)
        return res.status(422).json({error: "Please fill all the fields"});

        const userExist= await Developer.findOne({email});
        
        if(userExist)
        return res.status(422).json({message: "User Already Exist"});

        const newDev= new Developer({name, phone, email,work, password, cpassword});

        await newDev.save();

        res.status(200).json({message:"User Successfully Registered"});

    }catch(err){
            console.log(err);
            res.status(500).json({error:"Error Occured"});
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