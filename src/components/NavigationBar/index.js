import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

const NavigationBar = (props) => (
  <nav className="navbar sticky-top navbar-dark bg-dark">
    <Link className="navbar-brand" to='/'>
      {/* <span className="brandIcon ion ion-md-musical-note"></span>
      Bloc Jams */}
      <img height="40" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams logo" />
    </Link>
    
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to='/library'>
          Library
        </Link>
      </li>
    </ul>
    
  </nav>
);

export default NavigationBar;