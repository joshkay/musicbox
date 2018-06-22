import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Navbar,
  NavbarBrand, 
  Nav,
  NavItem, 
  NavLink 
} from 'reactstrap';

import './NavigationBar.css';

const NavigationBar = (props) => (
  <Navbar dark color="dark">
    <NavbarBrand tag={Link} to="/">
      <img height="40" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams logo" />
    </NavbarBrand>
    
    <Nav navbar className="mr-auto">
      <NavItem>
        <NavLink tag={Link} to="/library">
          Library
        </NavLink>
      </NavItem>
    </Nav>
    
    <a href={props.githubURL} target="_blank" className="github-project">
      <span className="icon ion-logo-github"></span>
    </a>
  </Navbar>
);

export default NavigationBar;