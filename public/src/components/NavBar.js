import React from 'react';


const NavBar =(props)=>{
    return (
      
          <nav className="navbar navbar-expand-lg" >
          <div className="navbar-brand">Protein Sequence Alignment</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick = {props.setLearn}>Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.setDIY}>Do it Yourself</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.setFAQ}>FAQ</a>
            </li>
            </ul>
          </div>
        </nav>
     
    );
  };

  export default NavBar;
