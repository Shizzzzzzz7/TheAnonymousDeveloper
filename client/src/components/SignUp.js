import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(){

   const navigate=useNavigate();

//This state is used to store the signup details of the user
    const [devDet, setDet]= useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    
    });

    //This function stores the form data in the state
    function getFormData(e){
        const {name,value}= e.target;
        setDet({...devDet,[name]:value});
        // setDet((prevFormDet)=>({...prevFormDet,[name]:value})); we can also use this
        
        
    }


    //This function is used to send the form data to the backend server
    async function handleForm(e){
        try{
        e.preventDefault();
        
        
       const response= await fetch("http://localhost:5010/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(devDet)
        });
        const data=await response.json();
        console.log(data);
        if(response.status === 500){
            console.log(data.error);
            return ;
        }else if(response.status !== 200){
            console.log(data.message);
            return ;
        }

        navigate("/signin");

    }catch(err){
        console.log(err);
    }
    }

    return(
        <>
            <form onSubmit={handleForm}>
                <input type="text" name="name" autoComplete="off" value={devDet.name} placeholder="Your Name" onChange={getFormData}/><br />
                <input type="text" name="email" autoComplete="off" value={devDet.email} placeholder="Your Email" onChange={getFormData}/><br />
                <input type="number" name="phone" autoComplete="off" value={devDet.phone} placeholder="Your Number" onChange={getFormData}/><br />
                <input type="text" name="work" autoComplete="off" value={devDet.work} placeholder="Your Profession" onChange={getFormData}/><br />
                <input type="password" name="password" autoComplete="off" value={devDet.password} placeholder="Password" onChange={getFormData}/><br />
                <input type="password" name="cpassword" autoComplete="off" value={devDet.cpassword} placeholder="Confirm Your Password" onChange={getFormData}/><br />
                <input type="submit" name="submit" />
            </form>

            
        </>
    );
}

export default SignUp;