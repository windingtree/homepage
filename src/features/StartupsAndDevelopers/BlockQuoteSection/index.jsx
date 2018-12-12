/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Blockquote from './BlockQuote';
import quote from './BlockQuote/quote.json';

const BlockQuoteSection = () => (
  <div className="my-3 my-md-5">
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Blockquote
            body={quote.body}
            name={quote.name}
            role={quote.role}
            img={quote.img}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default BlockQuoteSection;
