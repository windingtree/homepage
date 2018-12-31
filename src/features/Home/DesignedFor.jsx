// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';

const DesignedFor = () => (
  <article className="app-section bg-grad section-designed-for">
    <Container>
      <Row className="flex-column flex-md-row align-items-center">
        <Col sm={12} lg={8} className="mb-1 mb-md-0 text-center text-lg-left">
          <h2 className="text-white">
            Designed for Driving Innovation
          </h2>
          <p className="lead text-white text-sm-lg mb-2 mb-lg-0">
            Winding Tree is a non-profit foundation that drives the development of open-source
            protocols to allow any company, big or small, or even an individual developer, to
            try them out and integrate with the platform in no time.
          </p>
        </Col>
        <Col sm={12} lg={4} className="text-center">
          <i className="mdi mdi-xxl mdi-github-circle text-white d-none d-lg-inline" />
          <Button href="#startups-and-developers" className="mt-0 mt-lg-1" variant="light" outlined>
            Community
          </Button>
        </Col>
      </Row>
    </Container>
  </article>
);

export default DesignedFor;
