import { useState } from "react";

function SignUp(){

    const [devDet, setDet]= useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    
    });

    function getFormData(e){
        const {name,value}= e.target;
        setDet((prevFormDet)=>({...prevFormDet,[name]:value}));
        console.log(devDet);
        e.preventDefault(); 
    }
    return(
        <>
            <form >
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