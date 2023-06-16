const express= require("express");
const mongoose = require("mongoose");
const cors= require("cors");
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
app.use(cors());
app.use(express.json());
app.use(router);




//Listning to PORT
app.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`);
});
