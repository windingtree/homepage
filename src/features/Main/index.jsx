// @flow
import React from 'react';
import {
  Navbar, Footer, Container, Nav, Button,
} from '@windingtree/wt-ui-react';
import SuscribeForUpdates from 'commons/SuscribeForUpdates';
import ReadyToUse from 'commons/ReadyToUse';

type PropsType = {
  children: React$Node
};

const WTNavbar = () => (
  <header id="app-header" className="header-sticky">
    <Navbar expand="lg" variant="dark" variant="animated">
      <Container>
        <Navbar.Brand href="#home" as="a" className="mr-2" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <i className="mdi mdi-24px mdi-menu" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Dropdown title="Solutions" id="basic-nav-dropdown">
              <Nav.Dropdown.Item href="#suppliers">For travel suppliers</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#sellers">For sellers of travel</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#software-vendors">For software vendors</Nav.Dropdown.Item>
            </Nav.Dropdown>
            <Nav.Item>
              <Nav.Link href="https://github.com/windingtree/wiki">Api</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#lif-token">Lif Token</Nav.Link>
            </Nav.Item>
            <Nav.Dropdown title="Foundation" id="basic-nav-dropdown">
              <Nav.Dropdown.Item href="#Foundation#About">About</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#Foundation#Team">Team</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#Foundation#Events">Events</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#Foundation#Services">Services</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#Foundation#Project-Roadmap">Project Roadmap</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#Foundation#Blog">Blog</Nav.Dropdown.Item>
            </Nav.Dropdown>
            <Nav.Item>
              <Nav.Link href="#startups-and-developers">Community</Nav.Link>
            </Nav.Item>
            <Nav.Item href="#action/3.3">
              <Button block type="button" href="https://github.com/windingtree/">Join</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

const Main = ({ children }: PropsType) => (
  <div>
    <WTNavbar />
    {children}
    <SuscribeForUpdates />
    <ReadyToUse />
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
