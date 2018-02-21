import React from 'react';

import {NavLink} from 'react-router-dom';

const NavBar =(props)=>{
    return (
      
          <nav className="navbar navbar-expand-lg" >
          <div className="navbar-brand">Protein Sequence Alignment</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink exact={true} activeClassName="activeLink" className="nav-link" to="/" >Learn</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="activeLink" className="nav-link" to="/diy" >Do it Yourself</NavLink>
              </li>
              <li className="nav-item">
              <NavLink activeClassName="activeLink" className="nav-link" to="/faq">FAQ</NavLink>
            </li>
            </ul>
          </div>
        </nav>
     
    );
  };

  export default NavBar;
