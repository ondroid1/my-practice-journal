import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}><Glyphicon glyph='headphones' />&nbsp; My Practice Journal</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/my-week'}>
              <NavItem>
                <Glyphicon glyph='road' /> My Week
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/goals'}>
              <NavItem>
                <Glyphicon glyph='star' /> Goals
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/practices'}>
              <NavItem>
                <Glyphicon glyph='music' /> Practices
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/reports'}>
              <NavItem>
                <Glyphicon glyph='stats' /> Reports
              </NavItem>
            </LinkContainer>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
