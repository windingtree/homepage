// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import Quotes from './Quotes';


const InThePress = () => (
  <section className="in-the-press my-3 my-md-5">
    <Container>
      <h2 className="mb-2 mb-md-4 text-center">In the press</h2>
      <Row className="justify-content-md-center">
        <Col md={10}>
          <Quotes />
        </Col>
      </Row>
    </Container>
  </section>
);

export default InThePress;
