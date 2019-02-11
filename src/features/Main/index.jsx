// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar, Container, Nav, Button,
} from '@windingtree/wt-ui-react';
import classNames from 'classnames';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';
import Gdpr from 'commons/Gdpr';
import Footer from './Footer';

type PropsType = {
  children: React$Node
};

type StateType = {
  isOpen: boolean
};

class WTNavbar extends Component<*, StateType> {
  state = {
    isOpen: false,
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

  toggle = () => {
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
                <Nav.Dropdown title="Solutions" id="basic-nav-dropdown">
                  <LinkContainer to="/suppliers">
                    <Nav.Dropdown.Item onClick={this.toggle}>For Suppliers</Nav.Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/sellers">
                    <Nav.Dropdown.Item onClick={this.toggle}>
                      For Sellers & Agents
                    </Nav.Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/software-vendors">
                    <Nav.Dropdown.Item onClick={this.toggle}>
                      For Software Vendors
                    </Nav.Dropdown.Item>
                  </LinkContainer>
                </Nav.Dropdown>
                <Nav.Item>
                  <Nav.Link href="https://github.com/windingtree/wiki" target="_blank" rel="noopener noreferrer" onClick={this.toggle}>API</Nav.Link>
                </Nav.Item>
                <Nav.Dropdown title="Foundation" id="basic-nav-dropdown">
                  <LinkContainer to="/Foundation#About">
                    <Nav.Dropdown.Item onClick={this.toggle}>About</Nav.Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Foundation#Team">
                    <Nav.Dropdown.Item onClick={this.toggle}>Team</Nav.Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Foundation#Events">
                    <Nav.Dropdown.Item onClick={this.toggle}>Events</Nav.Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Foundation#Services">
                    <Nav.Dropdown.Item onClick={this.toggle}>Services</Nav.Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Foundation#Roadmap">
                    <Nav.Dropdown.Item onClick={this.toggle}>Roadmap</Nav.Dropdown.Item>
                  </LinkContainer>
                  <Nav.Dropdown.Item href="https://blog.windingtree.com" target="__blank" onClick={this.toggle}>Blog</Nav.Dropdown.Item>
                </Nav.Dropdown>
                <Nav.Item>
                  <LinkContainer to="/startups-and-developers">
                    <Nav.Link onClick={this.toggle}>Community</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item id="navbar-btn">
                  <Button block type="button" href="https://goo.gl/o7WP6R" onClick={this.toggle}>Join</Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}


const Main = ({ children }: PropsType) => (
  <div>
    <CustomHelmet {...metadata.default} />
    <WTNavbar />
    <Gdpr />
    {children}
    <Footer />
  </div>
);

export default Main;
