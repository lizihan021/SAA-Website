import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
	<div>
		<Nav>
      <LinkContainer to="/home">
        <NavItem eventKey={ 1 } href="/home">Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={ 2 } href="/about">About</NavItem>
      </LinkContainer>
      <LinkContainer to="/resources">
        <NavItem eventKey={ 3 } href="/resources">Resources</NavItem>
      </LinkContainer>
      <LinkContainer to="/newsletter">
        <NavItem eventKey={ 4 } href="/newsletter">News Letter</NavItem>
      </LinkContainer>
    </Nav>
	  <Nav pullRight>
	    <LinkContainer to="/signup">
	      <NavItem eventKey={ 5 } href="/signup">Sign Up</NavItem>
	    </LinkContainer>
	    <LinkContainer to="/login">
	      <NavItem eventKey={ 6 } href="/login">Log In</NavItem>
	    </LinkContainer>
	  </Nav>
	</div>
);

export default PublicNavigation;
