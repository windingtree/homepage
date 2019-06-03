// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';
import ScrollableAnchor from 'react-scrollable-anchor';

const About = (props: *) => {
  const { id, data } = props;
  return (
    <ScrollableAnchor id={id}>
      <div className="app-section section-about border-bottom border-light" id="About">
        <Container>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <p className="lead mb-2 mb-md-4 text-center">
                {data.text}
              </p>
              <p className="lead mb-1 mb-md-2 text-center text-lg">
                {data.cardSectionHeader}
              </p>
              <CardDeck className="col-8 col-sm-12  mx-auto mx-sm-0 ">
                {data.cardsInfo.map(card => (
                  <Card {...card} key={`about-card-${card.title}`} />
                ))}
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </div>
    </ScrollableAnchor>
  );
};

export default About;
