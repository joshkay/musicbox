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
    <NavbarBrand tag={Link} to="/" className="mr-1">
      <img height="35" src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Music Box logo" />
    </NavbarBrand>
    <NavbarBrand tag={Link} to="/">
      Music Box
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