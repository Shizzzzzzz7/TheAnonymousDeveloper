import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function About(){
    const navigate= useNavigate();
    
    async function callBackAbout(){

       try {const res= await fetch("http://localhost:5010/about", {

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
        
        

        
}catch(err){
    console.log(err);
    navigate("/signin");
}
    }

    useEffect(()=>{
        
        callBackAbout();
       // eslint-disable-next-line
    }, []);

    return(
        <>
            <h1> Hello,</h1>
        </>
    );
}

export default About;