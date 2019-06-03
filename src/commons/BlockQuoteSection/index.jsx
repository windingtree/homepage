/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import Blockquote from 'commons/BlockQuote';

const BlockQuoteSection = (props: *) => {
  const { data } = props;
  return (
    <section className="app-section section-quote">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Container>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Blockquote
                    body={data.body}
                    name={data.name}
                    role={data.role}
                    img={data.img}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlockQuoteSection;
