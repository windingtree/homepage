// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';

import ScrollableAnchor from 'react-scrollable-anchor';
import Quotes from './Quotes';
import Mentions from './Mentions';


const InThePress = (props: *) => {
  const { id, data } = props;

  return (
    <ScrollableAnchor id={id}>

      <article className="app-section section-in-the-press">
        <Container>

          <header className="mb-2 mb-md-4 text-center">
            <h2>{data.header}</h2>
          </header>

          <Row className="justify-content-md-center">
            <Col sm={12} md={10}>
              <Quotes data={data.quotes} />
              <Mentions data={data.mentions} />
            </Col>
          </Row>

        </Container>
      </article>
    </ScrollableAnchor>
  );
};

InThePress.defaultProps = {
  data: {
    header: 'In The Press',
    quotes: Quotes,
    mentions: Mentions,
  },
  id: 'press',
};

export default InThePress;
