/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import quote from 'DATA/features/StartupsAndDevelopers/BlockQuoteSection/BlockQuote';
import Blockquote from './BlockQuote';

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
