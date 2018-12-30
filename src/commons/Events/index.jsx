/* @flow */
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import EventTabs from './EventTabs';

const Events = () => (
  <section className="app-section">
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col md={10}>
          <h1>Events section</h1>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <EventTabs />
        </Col>
      </Row>
      <footer className="alert alert-accent-light text-center px-1">
        <p className="d-block d-md-inline mr-0 mr-md-2">If you want to invite Winding Tree to you event please send us an email</p>
        <Button variant="primary" href="mailto:info@windingtree.com">Send Email</Button>
      </footer>
    </Container>
  </section>
);

export default Events;
