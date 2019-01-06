/* @flow */
import React from 'react';
import { Container, Row, Col } from '@windingtree/wt-ui-react';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Hospitality from './Hospitality';
import Airlines from './Airlines';
import Tours from './Tours';

const Solutions = () => (
  <section className="app-section">
    <Container>
      <header>
        <Row className="justify-content-md-center">
          <Col md={10} className="text-center mb-1">
            <h2>Solutions</h2>
          </Col>
        </Row>
      </header>
      <Row className="justify-content-md-center">
        <Col md={10} className="text-center mb-1">
          <Hospitality />
          <Airlines />
          <Tours />
          <hr className="my-md-4" />
          <PartnersAndContributors tab={1} />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Solutions;
