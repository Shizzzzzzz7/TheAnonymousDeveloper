import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout(){
    const navigate= useNavigate();
    const callBackFun=async()=>{
            try{

                const res=await fetch("http://localhost:5010/logout",{
                    method:"GET",
                    credentials: "include"
                });

                if(res.status !== 200){
                    throw new Error("User Not Logged Out")
                }
                
                navigate("/signin");

            }catch(err){
                console.log(err);
                navigate("/");
            }
    }

    useEffect(()=>{
        
        callBackFun();
        
        // eslint-disable-next-line
    },[])

    return(<>
    
        <h1>HELLO</h1>
    </>);
}

export default Logout;