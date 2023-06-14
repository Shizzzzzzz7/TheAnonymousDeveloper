function SignIn(){
    return(
        <>
            <form action="">
                
                <input type="text" name="email" autoComplete="off" placeholder="Your Email"/><br />
                
                <input type="password" name="password" autoComplete="off" placeholder="Password"/><br />
               
                <input type="submit" name="submit" />
            </form>
        </>
    );
}

export default SignIn;