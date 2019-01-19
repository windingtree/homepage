// @flow
import React from 'react';
import {
  Row, Container, Col, Button,
} from '@windingtree/wt-ui-react';
import LearnMoreCards from 'commons/LearnMoreCards';

const ReadyToUse = () => (
  <section className="app-section bg-grad-down section-pre-footer" style={{ borderBottom: '1px solid #8359A2' }}>
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col md={10}>
          <h2 className="mb-1 text-white">Ready to use Winding Tree?</h2>
          <p className="mb-1 mb-md-2 text-white">
          Learn our API on Github or apply for integration and we will get back to you
          </p>
          <Button variant="light" outlined href="https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform" target="_blank">
            Apply for integration
          </Button>
        </Col>
      </Row>
      <div className="d-none d-md-block mt-4">
        <LearnMoreCards />
      </div>
    </Container>
  </section>
);

export default ReadyToUse;
