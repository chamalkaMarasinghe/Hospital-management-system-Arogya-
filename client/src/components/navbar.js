import {Link, Navigate } from "react-router-dom";
import './navbar.css'

function Navbar() {
     return(
      <>
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
            <div className="align-items-center d-none d-md-flex">
              <i className="bi bi-clock"></i> <marquee direction="right"> 24 hours open </marquee>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-phone"></i> <marquee direction="right">Call us now +1 5589 55488 55 </marquee>
            </div>
          </div>
        </div>
      
     
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
      
            <Link to="/" className="navbar-brand">
                <img src="assets/img/log.png" alt="Logo" width="150" height="70" className="d-inline-block align-text-top" />
            </Link>
              
            <h1 className="logo me-auto"><a href="index.html"><p>AROGYA HOSPITAL</p></a></h1> 
      
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><a className="nav-link scrollto ">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#departments">Contact</a></li>
                <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
            <Link to='/login'>  <a href="registration.jsx" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a></Link>
      
          </div>
        </header>
        </>
     );


}

export default Navbar;