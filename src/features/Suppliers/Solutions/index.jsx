/* @flow */
import React from 'react';
import { Container, Row, Col } from '@windingtree/wt-ui-react';
import Hospitality from './Hospitality';
import Airlines from './Airlines';
import Tours from './Tours';
import Quotes from './Quotes';

const Solutions = () => (
  // solutions-section
  <section className="app-section">
    <Container>
      <Row>
        <Col>
          <header className="mb-4">
            <h2 className="text-center">Solutions</h2>
          </header>

          <Hospitality />
          <Airlines />
          <Tours />

          <hr className="my-md-4" />

          <Quotes />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Solutions;
