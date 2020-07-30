import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){ 


    return (
        <nav className="  navbar navbar-expand-lg navbar-light navbar-fixed-top bg-transparent">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className=" navbar-nav">
            <li className="nav-item suboptions" >
              <Link className="nav-link" to="/portfolio">Portfolio <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/contact">Contact Me</Link>
            </li>
            
            
          </ul>
        </div>
      </nav>
    )
}


export default Navbar