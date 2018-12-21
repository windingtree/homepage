// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';

const DesignedFor = () => (
  <section className="app-section">
    <Container>
      <Row className="flex-column flex-md-row align-items-center">
        <Col md={8} className="mb-1 mb-md-0">
          <h2 className="mb-1 text-white">
            Designed for Driving Innovation
          </h2>
          <p className="lead text-white">
            Winding Tree is a non-profit foundation that drives the development of open-source
            protocols to allow any company, big or small, or even an individual developer, to
            try them out and integrate with the platform in no time.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <i className="mdi mdi-48px mdi-github-circle d-block mb-1 mb-md-2 text-white" />
          <Button href="#startups-and-developers" variant="light" outlined>
            Community
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default DesignedFor;
