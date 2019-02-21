// @flow
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import ExtendedCard from 'commons/ExtendedCard';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';


configureAnchors({ offset: -70, scrollDuration: 400 });

const AttendeeCardsSection = (props: *) => {
  const { data, id } = props;
  return (
    <ScrollableAnchor id={id}>
      <div className="app-section pt-0">
        <Container>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <h2 className="my-3 mb-md-4 text-center">
                {data.header}
              </h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <CardDeck className="card-deck-sm-stack">
              {data.types.map(attendee => (
                <ExtendedCard
                  key={attendee.title}
                  data={attendee}
                />
              ))}
            </CardDeck>
          </Row>
        </Container>
      </div>
    </ScrollableAnchor>

  );
};

export default AttendeeCardsSection;
