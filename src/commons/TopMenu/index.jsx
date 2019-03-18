// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar, Container, Nav, Button,
} from '@windingtree/wt-ui-react';
import classNames from 'classnames';

import menuData from 'DATA/commons/MainMenu';


type StateType = {
  isOpen: boolean
};

class WTNavbar extends Component<*, StateType> {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }


  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleOutsideClick = (e: *) => {
    // $FlowFixMe
    const { refHeader } = this;
    const { isOpen } = this.state;
    if (isOpen && !refHeader.contains(e.target)) {
      this.setState({ isOpen: false });
    }
  }

  toggle() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    const navbarClassName = classNames(
      'navbar-nav--animated-btn',
      {
        'is-open': isOpen,
      },
    );
    return (
      // $FlowFixMe
      <header id="app-header" className="header-sticky" ref={(node) => { this.refHeader = node; }}>
        <Navbar expand="lg" variant="animated" className={navbarClassName} expanded={isOpen}>
          <Container>
            <Navbar.Brand to="/" as={Link} className="mr-2" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" onClick={this.toggle}>
              <i className="mdi mdi-24px mdi-menu" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

                {menuData.menuItems.map(menuItem => (
                  <React.Fragment key={menuItem.title}>
                    { menuItem.items && menuItem.items.length > 0
                      ? (
                        <Nav.Dropdown title={menuItem.title} id="basic-nav-dropdown">
                          {
                            menuItem.items.map(dropdownItem => (


                              dropdownItem.link.startsWith('http')
                                ? (

                                  <Nav.Dropdown.Item href={dropdownItem.link} target="__blank" rel="noopener noreferrer" onClick={this.toggle} key={dropdownItem.title}>
                                    {dropdownItem.title}
                                  </Nav.Dropdown.Item>

                                )
                                : (

                                  <LinkContainer to={dropdownItem.link} key={dropdownItem.title}>
                                    <Nav.Dropdown.Item onClick={this.toggle}>
                                      {dropdownItem.title}
                                    </Nav.Dropdown.Item>
                                  </LinkContainer>

                                )

                            ))
                          }
                        </Nav.Dropdown>
                      )
                      : menuItem.link.startsWith('http')
                        ? (
                          <Nav.Item>
                            <Nav.Link href={menuItem.link} target="__blank" rel="noopener noreferrer" onClick={this.toggle}>
                              {menuItem.title}
                            </Nav.Link>
                          </Nav.Item>
                        )
                        : (
                          <Nav.Item>
                            <LinkContainer to={menuItem.link}>
                              <Nav.Link onClick={this.toggle}>
                                {menuItem.title}
                              </Nav.Link>
                            </LinkContainer>
                          </Nav.Item>
                        )
                    }
                  </React.Fragment>
                ))}


                <Nav.Item id="navbar-btn">
                  <Button block type="button" href={menuData.ctaButton.link} onClick={this.toggle}>{menuData.ctaButton.title}</Button>
                </Nav.Item>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}


export default WTNavbar;
