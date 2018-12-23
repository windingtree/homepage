// @flow
import React from 'react';
import {
  Tab, Row, Col, Nav, Image, Container,
} from '@windingtree/wt-ui-react';
import features from './data';

const Features = () => (
  <Container className="app-section">
    <Tab.Container id="features-tabs" defaultActiveKey={features[0].name}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {
              features.map(({ name }) => (
                <Nav.Item className="text-dark feature-nav" key={name}>
                  <Nav.Link eventKey={name}>{name}</Nav.Link>
                </Nav.Item>
              ))
            }
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {features.map(({
              name, text, imgSrc, link,
            }) => (
              <Tab.Pane key={name} eventKey={name}>
                <article className="feature js-feature text-center " data-is={name} style={{ display: 'block' }}>
                  <Image src={imgSrc} alt="" className="mb-1" width="90" height="90" />
                  <h3 className="mb-1 text-muted">{name}</h3>
                  <p>{text}</p>
                  {link && (
                  <footer className="mt-1">
                    <a href={link.href} className="border-bottom">
                      {link.text}
                    </a>
                  </footer>)}
                </article>
              </Tab.Pane>
            ))
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
);

export default Features;
