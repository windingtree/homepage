/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Contributors from 'commons/Contributors';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import BlockQuoteSection from './BlockQuoteSection';

const StartupsAndDevelopers = () => (
  <section className="already-with-us my-3 my-md-5">
    <Container>
      <Row className="justify-content-md-center">
        <BlockQuoteSection />
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="mb-2 mb-md-4 text-center">Already With Us</h2>
          <PartnersAndContributors />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h3 className="mb-2 mb-md-3 text-center">Developers and Contributors</h3>
        </Col>
      </Row>
    </Container>
    <Contributors />
  </section>
);

export default StartupsAndDevelopers;
