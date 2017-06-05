import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="/mhome">
        <NavItem eventKey={ 1 } href="/mhome">M-Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/mabout">
        <NavItem eventKey={ 2 } href="/mabout">M-About</NavItem>
      </LinkContainer>
      <LinkContainer to="/mresources">
        <NavItem eventKey={ 3 } href="/mresources">M-Resources</NavItem>
      </LinkContainer>
      <LinkContainer to="/mnewsletter">
        <NavItem eventKey={ 4 } href="/mnewsletter">M-NewsLetter</NavItem>
      </LinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 5 } href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 6 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 6.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
