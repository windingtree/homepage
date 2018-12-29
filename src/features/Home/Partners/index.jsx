// @flow
import React from 'react';
import {
  Container, Col, Row, Button,
} from '@windingtree/wt-ui-react';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import Slicks from './Slicks';

const Partners = () => (
  <section className="app-section section-partners bg-white border-bottom border-light">

    <Container>
      <header className="mb-2 mb-md-4 text-center">
        <h2>Partners</h2>
      </header>

      <Row className="justify-content-md-center mb-3">
        <Col sm={12} md={10}>
          <PartnersAndContributors />
        </Col>
      </Row>
    </Container>

    <Slicks />

    <Container>
      <Row>
        <Col sm={12}>
          <footer className="text-center">
            <Button
              href="mailto:partners@windingtree.com"
              variant="dark"
              outlined
            >
              Become partner
            </Button>
          </footer>
        </Col>
      </Row>
    </Container>

  </section>
);

export default Partners;
