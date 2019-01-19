/* @flow */
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import EventTabs from './EventTabs';

const Events = () => (
  <section className="app-section section-events">
    <Container>
      <header>
        <Row>
          <Col md={12} className="text-center mb-2">
            <h2>Where to meet our team</h2>
          </Col>
        </Row>
      </header>
      <Row id="Events" className="justify-content-center">
        <Col md={10}>
          <EventTabs />
          <footer className="alert alert-accent-light text-center px-1">
            <p className="d-block d-lg-inline mr-0 mr-lg-2">If you want to invite Winding Tree to you event please send us an email</p>
            <Button variant="primary" href="mailto:info@windingtree.com">Send Email</Button>
          </footer>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Events;
