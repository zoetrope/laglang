import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import classNames from 'classnames/bind'
import styles from './styles';
let cx = classNames.bind(styles);

export default class Header extends Component {

  render() {
    return <Navbar className={cx('navbar')} inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Laglang</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className={cx('navitem')}>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
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
