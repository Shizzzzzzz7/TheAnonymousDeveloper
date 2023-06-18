import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn(){
    const navigate= useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

async function formHandle(e){
    e.preventDefault();

    const response= await fetch("http://localhost:5010/login",{
        method:"POST",
        credentials: "include", //This will include all the credentials that the backend sends eg:cookies etc
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });
    const data= await response.json();
    console.log(data.message);
    if(response.status === 200){
        console.log("Done");
        navigate("/");
    }
}

    return(
        <>
            <form onSubmit={formHandle}>
              {/* To know how this useState works with HTML form then play with State, value and onChange you will undestand by yourself*/}
                <input type="text" name="email" autoComplete="off" value={email} placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                
                <input type="password" name="password" value={password} autoComplete="off" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/><br />
               
                <input type="submit" name="submit" />
            </form>
        </>
    );
}

export default SignIn;