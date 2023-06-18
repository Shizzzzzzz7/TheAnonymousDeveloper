const jwt=require("jsonwebtoken");
const Developer = require("../models/developerSchema");

const authenticate= async(req,res,next)=>{
    try {

        const token = req.cookies.jwttoken;
        const verifyToken= jwt.verify(token, process.env.SECRET_KEY);

        const rootUser= await Developer.findOne({_id:verifyToken._id, token:token});

        if(!rootUser){
            throw new Error("User Not Found");
        }

        //See Notes to understand this
        req.token=token;
        req.rootUser=rootUser;
        req.userID= rootUser._id;

        next();
        
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            error:"Some Error Occured"
        });
    }
}

module.exports= {authenticate};