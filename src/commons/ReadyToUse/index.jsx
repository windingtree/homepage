// @flow
import React from 'react';
import {
  Row, Container, Col, Button,
} from '@windingtree/wt-ui-react';
import LearnMoreCards from 'commons/LearnMoreCards';

const ReadyToUse = () => (
  <section className="app-section bg-grad-down">
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col md={10}>
          <h2 className="mb-1 text-white">Ready to use Winding Tree?</h2>
          <p className="mb-1 mb-md-2 text-white">
          Check our official API documentation and integrate your software to new travel ecosystem
          </p>
          <Button variant="light" outlined href="https://github.com/windingtree/wiki" target="_blank">
            Join platform
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
