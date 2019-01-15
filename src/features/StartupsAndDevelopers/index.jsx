/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Contributors from 'commons/Contributors';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Events from 'commons/Events';
import Hero from 'commons/Hero';
import Banner from 'commons/Banner';

import BlockQuoteSection from './BlockQuoteSection';

const StartupsAndDevelopers = () => (
  <>
    <Hero variant="startupsAndDevelopers" icons />
    <section className="app-section section-already-with-us-quote">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <BlockQuoteSection />
          </Col>
        </Row>
      </Container>
    </section>

    <Banner variant="howWeWork" />

    <hr className="divider m-0" />

    <section className="app-section section-already-with-us">

      <Container>
        <header className="mb-2 mb-md-4 text-center">
          <h2>Already With Us</h2>
        </header>

        <Row className="justify-content-md-center">
          <Col md={10} className="mb-3">
            <PartnersAndContributors />
          </Col>
        </Row>
      </Container>

      <header className="text-center mb-1">
        <h3 className="text-muted">Developers and Contributors</h3>
      </header>

      <Contributors />
      <Events />
    </section>
  </>

);

export default StartupsAndDevelopers;
