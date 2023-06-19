const express= require("express");
const Developer= require("../models/developerSchema");
const bcrypt= require("bcrypt");
const cookieParser= require("cookie-parser");
const jwt= require("jsonwebtoken");
const {authenticate} = require("../middleware/authenticate");

const router= express.Router();

router.use(cookieParser());

//Routes
router.get("/",(req,res)=>{

    res.send("Welcome to Home Page");
});

router.post("/login",async(req,res)=>{
    try {

        const {email, password}= req.body;

        if(!email || !password)
        return res.status(422).json({message: "Please fill all the fields"});

        const userExist= await Developer.findOne({email});
        

        if(!userExist)
        return res.status(404).json({message: "Invalid Credentials"});

        const isMatched= await bcrypt.compare(password, userExist.password);

        if(!isMatched)
        return res.status(400).json({message: "Invalid Credentials"});
        else{
            //Generating JWT Token
        const token= await jwt.sign({_id:userExist._id}, process.env.SECRET_KEY);

        // console.log(token);
        //Adding JWT Token into Users DATABASE
        userExist.token=token;
        await userExist.save();
        res.cookie("jwttoken", token,{
            expires: new Date(new Date().getTime() + 10 * 100000),
            httpOnly: true
        }).status(200).json({message: "Welcome"});
        }
        

        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
        
    }
    
});

router.post("/signup",async (req,res)=>{

    try{
        const {name, phone, email,work, password, cpassword}= req.body;

        if(!name || !phone || !email || !work || !password|| !cpassword)
        return res.status(422).json({message: "Please fill all the fields"});

        const userExist= await Developer.findOne({email});
        
        if(userExist)
        return res.status(422).json({message: "User Already Exist"});

        if(password!=cpassword)
        return res.status(422).json({message:"Password & Confirm Password doesn't match"});

        const hashedPassword= await bcrypt.hash(password,10);
        const cnfpassword=hashedPassword;

        const newDev= new Developer({name, phone, email,work, password: hashedPassword, cpassword: cnfpassword});

        await newDev.save();

        res.status(200).json({message:"User Successfully Registered"});

    }catch(err){
            console.log(err);
            res.status(500).json({error:"Error Occured"});
    }
    
});

router.get("/about",authenticate,(req,res)=>{
    // console.log("About Us Accessed");
    res.send(req.rootUser);
});

router.get("/contact",authenticate,(req,res)=>{

    res.send(req.rootUser);
});

module.exports= router;