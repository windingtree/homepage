// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';

import Quotes from './Quotes';
import Mentions from './Mentions';


const InThePress = () => (
  <article className="app-section section-in-the-press">
    <Container>

      <header className="mb-2 mb-md-4 text-center">
        <h2>In the press</h2>
      </header>

      <Row className="justify-content-md-center">
        <Col sm={12} md={10}>
          <Quotes />
          <Mentions />
        </Col>
      </Row>

    </Container>
  </article>
);

export default InThePress;
