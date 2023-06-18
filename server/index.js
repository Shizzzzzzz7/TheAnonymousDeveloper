const express= require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const cookieParser= require("cookie-parser");
const dotenv= require("dotenv");
const {connection} = require("./db/connection");
const Developer = require("./models/developerSchema");
const router= require("./router/authRoute");



const app= express();

//configuring .env file
dotenv.config({path: "./.env"});


//PORT for server
const PORT = process.env.PORT;

//Establishing Connection to Database (Since NodeJS goes from top to bottom so first
//making connection with database is done)
connection();

//Middleware
//cors By configuring CORS with these options, your application will allow cross-origin requests from http://localhost:3000 and include credentials in those requests. This is useful when you want to make API calls or access resources from a different domain while developing locally.
//If not done then it wont be able to send cookies to frontend
app.use(cors({origin:"http://localhost:3000", credentials:true}));
app.use(cookieParser());
app.use(express.json());
app.use(router);




//Listning to PORT
app.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`);
});
