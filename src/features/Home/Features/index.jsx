// @flow
import React from 'react';
import {
  Tab, Row, Col, Nav, Image, Container, Button,
} from '@windingtree/wt-ui-react';
import features from './data';

const Features = () => (
  <article className="app-section section-features">
    <Container>

      <header className="mb-2 mb-md-4 text-center">
        <h2>Features</h2>
      </header>

      <Row className="justify-content-md-center">
        <Col sm={12} md={10}>

          <Tab.Container id="features-tabs" defaultActiveKey={features[0].name}>
            <Row className="mb-2">
              <Col md={6} lg={4}>
                <Nav className="flex-column mb-1">
                  {
                features.map(({ name }) => (
                  <Nav.Item className="d-block" key={name}>
                    <p>
                      <Nav.Link className="text-link" eventKey={name}>{name}</Nav.Link>
                    </p>
                  </Nav.Item>
                ))
              }
                </Nav>
              </Col>
              <Col md={6} lg={8}>
                <Tab.Content>
                  {
                features.map(({
                  name, text, imgSrc, link,
                }) => (
                  <Tab.Pane eventKey={name}>
                    <article className="feature text-center" dataIs={name} style={{ display: 'block', marginTop: -20 }}>
                      <Image src={imgSrc} alt="icon" className="mb-1" width="90" height="90" />
                      <h3 className="mb-1 text-muted">{name}</h3>
                      <p>{text}</p>
                      {
                        link
                          ? (
                            <footer className="mt-1">
                              <a href={link.href} className="border-bottom">
                                {link.text}
                              </a>
                            </footer>)
                          : ('')
                      }
                    </article>
                  </Tab.Pane>
                ))
              }
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

          <footer className="text-center">
            <Button href="https://github.com/windingtree/" target="_blank" variant="outline-dark">
          Join platform
            </Button>
          </footer>

        </Col>
      </Row>
    </Container>
  </article>
);

export default Features;
