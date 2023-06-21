import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/404Page";
import Logout from "./components/Logout";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
