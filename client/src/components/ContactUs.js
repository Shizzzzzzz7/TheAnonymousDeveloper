function ContactUs(){

    return(<>

<form action="">
                
                <input type="text" name="name" autoComplete="off" placeholder="Your Name"/><br />
                
                <input type="password" name="email" autoComplete="off" placeholder="Your Email"/><br />

                <input type="number" name="phone" autoComplete="off" placeholder="Your Number"/><br/>

                <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea><br/>
               
                <button type="submit">Submit</button>
            </form>
    </>);
}

export default ContactUs