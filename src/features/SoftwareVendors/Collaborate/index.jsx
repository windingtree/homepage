// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';


const Collaborate = (props: *) => {
  const { id, data } = props;
  return (
    <section className="app-section section-collaborate" id={id}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="mb-2 mb-md-4 text-center">
              <p className="lead mb-1 mb-md-2">
                {data.accentText}
              </p>
              <Button href={data.CTAButtonUrl} variant="dark" outlined>
                {data.CTAButonLabel}
              </Button>
            </div>
            <p className="mb-1 mb-md-2 text-center text-md-left">
              {data.cardsNoticeText}
            </p>
            <CardDeck>
              {data.cardsData.map(card => (
                <Card {...card} key={`about-card-${card.title}`} />
              ))}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Collaborate;
