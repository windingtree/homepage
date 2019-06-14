// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import CardDeck from '@windingtree/wt-ui-react/lib/components/CardDeck';
import Card from 'commons/Card';


const ShortCardSection = (props: *) => {
  const { id, data } = props;
  return (
    <section className="app-section section-collaborate bg-gray-200" id={id}>
      <Container>
        <Row className="justify-content-center">
          <Col md={11} lg={8} className="col-12 justify-content-center">
            <h2 className="mb-3 mb-md-4 text-center">
              {data.header}
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="mb-2 text-center">
              <p className="lead mb-1 mb-md-2">
                {data.accentText}
              </p>
            </div>

            <CardDeck>
              {data.cardsData.map(card => (
                <Col md={4} className="col-12 justify-content-center py-1">
                  <Card {...card} key={`about-card-${card.title}`} />
                </Col>
              ))}
            </CardDeck>
            <div className="mt-2 mt-md-4 text-center">
              <Button href={data.CTAButtonUrl} className="btn-outline-dark">
                {data.CTAButonLabel}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShortCardSection;
