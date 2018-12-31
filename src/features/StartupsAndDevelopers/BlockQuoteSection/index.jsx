/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Blockquote from './BlockQuote';
import quote from './BlockQuote/quote.json';

const BlockQuoteSection = () => (
  <>
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Blockquote
            body={quote.body}
            name={quote.name}
            role={quote.role}
            img={quote.img}
          />
        </Col>
      </Row>
    </Container>
  </>
);

export default BlockQuoteSection;
