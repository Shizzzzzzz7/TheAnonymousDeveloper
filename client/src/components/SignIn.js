import { useState } from "react";

function SignIn(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

async function formHandle(e){
    e.preventDefault();

    const response= await fetch("http://localhost:5010/login",{
        method:"POST",
        credentials: "include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });

    console.log(response);
    if(response.status === 200){
        console.log("DOne");
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