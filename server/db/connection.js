//Connecting to Database Code

const mongoose = require("mongoose");


const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the Database");
    }catch(err){
        console.log("Error Occured = ", err);
    }
}

module.exports={connection};