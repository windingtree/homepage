/* @flow */
import React from 'react';
import {
  Image, Container, Row, Col,
} from '@windingtree/wt-ui-react';
import diagramSrc from './img/diagram-md.png';
import schemeSrc from './img/scheme-sm.svg';

const HowItWorks = () => (
  <section className="how-it-works-banner py-3 py-md-5 bg-grad text-center">
    <Container>
      <Row className="justify-content-md-center">
        <Col md={10}>
          <h2 className="mb-2 mb-md-4 text-white">How it Works</h2>
          <Image src={schemeSrc} alt="" fluid className="d-md-none mb-2" />
          <Image src={diagramSrc} alt="" fluid className="d-none d-md-inline-block mb-md-4" />
          <p className="text-md-left text-white">
            {'Winding Tree is a blockchain distributed ledger which stores URLs and indexes and '}
            {'all the inventory content is stored in distributed database'}
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HowItWorks;
