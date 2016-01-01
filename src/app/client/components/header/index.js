import React, { Component } from 'react';
//import styles from './styles';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

//import './styles.styl';

export default class Header extends Component {

  /*
   <nav className="navbar navbar-inverse navbar-fixed-top">
   <nav className={styles['navbar'] + ' ' + styles['navbar-inverse'] + ' ' + styles['navbar-fixed-top']}>
   */
  render() {
    return <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Laglang</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/dictionary">
            <NavItem eventKey={2}>Dictionary</NavItem>
          </LinkContainer>
          <LinkContainer to="/translator">
            <NavItem eventKey={3}>Translator</NavItem>
          </LinkContainer>
          <LinkContainer to="/history">
            <NavItem eventKey={4}>History</NavItem>
          </LinkContainer>
          <LinkContainer to="/card">
            <NavItem eventKey={5}>Card</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }

}
