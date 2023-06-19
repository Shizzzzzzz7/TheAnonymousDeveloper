import {useEffect, useState} from "react";

function ContactUs(){
    const [devDet,setDet]= useState({
        name: "",
        email:"",
        phone:""
    });
    async function callBackAbout(){

        try {const res= await fetch("http://localhost:5010/contact", {
 
         method: "GET",
         headers:{
             "Content-Type":"application/json",
             Accept: "application/json"
         },
         credentials:"include"
         });
 
         if(res.status !== 200){ 
             throw new Error("Error Occured");
         }
         
         const data= await res.json();
         setDet({name:data.name,
        email:data.email,
    phone:data.phone});
         
 
         
 }catch(err){
     console.log(err);
 }
     }
 
     useEffect(()=>{
         
         callBackAbout();
        // eslint-disable-next-line
     }, []);

    return(<>

<form action="">
                
                <input type="text" name="name" autoComplete="off" value={devDet.name} placeholder="Your Name"/><br />
                
                <input type="text" name="email" autoComplete="off" value={devDet.email} placeholder="Your Email"/><br />

                <input type="text" name="phone" autoComplete="off" value={devDet.phone} placeholder="Your Number"/><br/>

                <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea><br/>
               
                <button type="submit">Submit</button>
            </form>
    </>);
}

export default ContactUs