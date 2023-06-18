const mongoose= require("mongoose");

//This defines the structure of the documents in DB (documents=File/Info representing a 
//a particular User)
const developerSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
    type:Number,
    required: true
},
work:{
    type: String,
    required: true
},
password:{
    type:String,
    required: true
},
cpassword:{
    type:String,
    required: true
},
token:{

    type:String
}
    


});

//This makes the collection of DB
const Developer= mongoose.model("Developer", developerSchema);

module.exports= Developer;