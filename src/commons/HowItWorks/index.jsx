/* @flow */
import React from 'react';
import {
  Image, Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import howItWorks from './img/HowItWorks.png';
import data from './data.json';

const HowItWorks = () => (
  <section className="how-it-works-banner py-3 py-md-5 text-center app-section">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={10}>
          <h2 className="mb-2 mb-md-4">How it Works</h2>
          <Image src={howItWorks} alt="" fluid className="d-none d-md-inline-block mb-md-4" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <p className="text-md-left">{data.text}</p>
        </Col>
        <Col md={1}>
          <Button variant="primary">WATCH VIDEO</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HowItWorks;
