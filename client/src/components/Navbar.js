import {Link} from "react-router-dom";

function Navbar(){

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/navbar">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signin">SignIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;