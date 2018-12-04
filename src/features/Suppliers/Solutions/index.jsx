/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Hospitality from './Hospitality';
import Airlines from './Airlines';
import Tours from './Tours';

const Solutions = () => (
  <section className="solutions my-3 my-md-5">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <header className="mb-2 mb-md-3">
            <h2 className="text-center">Solutions</h2>
          </header>
          <Hospitality />
          <Airlines />
          <Tours />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Solutions;
