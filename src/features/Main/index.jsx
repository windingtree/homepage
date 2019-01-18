// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar, Footer, Container, Nav, Button,
} from '@windingtree/wt-ui-react';
import metadata from 'data/metadata.json';
import CustomHelmet from 'commons/CustomHelmet';

type PropsType = {
  children: React$Node
};

const WTNavbar = () => (
  <header id="app-header" className="header-sticky">
    <Navbar expand="lg" variant="animated">
      <Container>
        <Navbar.Brand to="/" as={Link} className="mr-2" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <i className="mdi mdi-24px mdi-menu" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Dropdown title="Solutions" id="basic-nav-dropdown">
              <LinkContainer to="/suppliers">
                <Nav.Dropdown.Item>For Suppliers</Nav.Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/sellers">
                <Nav.Dropdown.Item>For Sellers & Agents</Nav.Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/software-vendors">
                <Nav.Dropdown.Item>For Software Vendors</Nav.Dropdown.Item>
              </LinkContainer>
            </Nav.Dropdown>
            <Nav.Item>
              <Nav.Link href="https://github.com/windingtree/wiki" target="_blank" rel="noopener noreferrer">API</Nav.Link>
            </Nav.Item>
            <Nav.Dropdown title="Foundation" id="basic-nav-dropdown">
              <LinkContainer to="/Foundation#About">
                <Nav.Dropdown.Item>About</Nav.Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Foundation#Team">
                <Nav.Dropdown.Item>Team</Nav.Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Foundation#Events">
                <Nav.Dropdown.Item>Events</Nav.Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Foundation#Services">
                <Nav.Dropdown.Item>Services</Nav.Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Foundation#Roadmap">
                <Nav.Dropdown.Item>Roadmap</Nav.Dropdown.Item>
              </LinkContainer>
              <Nav.Dropdown.Item href="https://blog.windingtree.com" target="__blank">Blog</Nav.Dropdown.Item>
            </Nav.Dropdown>
            <Nav.Item>
              <LinkContainer to="/startups-and-developers">
                <Nav.Link>Community</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <Button block type="button" href="https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform">Join</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

const Main = ({ children }: PropsType) => (
  <div>
    <CustomHelmet {...metadata.default} />
    <WTNavbar />
    {children}
    <Footer>
      <Footer.Solutions />
      <Footer.LifToken />
      <Footer.About />
      <Footer.Contacts />
      <Footer.Comunity />
    </Footer>
  </div>
);

export default Main;
