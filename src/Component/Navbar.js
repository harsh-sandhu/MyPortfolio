import { Fragment } from "react";
import icon from '../Assets/icon.png';
const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'yellow',height:'10vh',paddingTop:'20px'}}>
        <div className="container-fluid mx-4">
          <a className="navbar-brand" href="#">
            <img src={icon} className="rounded-circle" width="40"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5 ms-3">
                <a style={{color:'#662d91',fontWeight:'700'}} className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a style={{color:'#662d91'}} className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item me-5">
                <a style={{color:'#662d91'}} className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a style={{color:'#662d91'}} className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navbar;
