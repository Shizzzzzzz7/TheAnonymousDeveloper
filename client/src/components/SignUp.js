function SignUp(){
    return(
        <>
            <form action="">
                <input type="text" name="name" autoComplete="off" placeholder="Your Name"/><br />
                <input type="text" name="email" autoComplete="off" placeholder="Your Email"/><br />
                <input type="number" name="phone" autoComplete="off" placeholder="Your Number"/><br />
                <input type="text" name="work" autoComplete="off" placeholder="Your Profession"/><br />
                <input type="password" name="password" autoComplete="off" placeholder="Password"/><br />
                <input type="password" name="cpassword" autoComplete="off" placeholder="Confirm Your Password"/><br />
                <input type="submit" name="submit" />
            </form>
        </>
    );
}

export default SignUp;