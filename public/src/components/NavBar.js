import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar =(props)=>{
    return (

      <div>
      
          <nav className="navbar navbar-expand-lg" >
          <a className="navbar-brand">Protein Sequence Alignment</a>
   
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick = {props.setLearn}>Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.setDIY}>Do it Yourself!</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.setFAQ}>FAQ</a>
            </li>
            </ul>
          
          </div>
        </nav>
      </div>
    );
  };

  export default NavBar;
