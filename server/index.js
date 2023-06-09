const express= require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const {connection} = require("./db/connection");
const Developer = require("./models/developerSchema");
const router= require("./router/authRoute");



const app= express();

//configuring .env file
dotenv.config({path: "./.env"});

//PORT for server
const PORT = process.env.PORT;

//Middleware
app.use(express.json());
app.use(router);

//Establishing Connection to Database
connection();


//Listning to PORT
app.listen(PORT, ()=>{
    console.log(`Server Running on PORT ${PORT}`);
});
