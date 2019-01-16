/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import { roadmapData } from './data';
import Period from './Period';

const Roadmap = () => (
  <article className="app-section section-features pt-1">
    <Container>
      <header>
        <Row className="justify-content-md-center">
          <Col md={10} className="text-center mb-1">
            <h2>Roadmap</h2>
          </Col>
        </Row>
      </header>
    </Container>
    <Container>
      {roadmapData.map(period => (
        <Period {...period} key={`${period.firstLine}-${period.secondLine}`} />
      ))}
    </Container>
  </article>
);

export default Roadmap;
